import { useContext } from "react";
import PortfolioContext from "../../context/context";
import {
	Container,
	Box,
	Heading,
	Text,
	useMediaQuery,
	useColorModeValue,
	Image,
	SimpleGrid,
	Flex,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import Button from "../buttons/ButtonLink";
import TechIcon from "./TechIcon";

const Projects = () => {
	const { projects } = useContext(PortfolioContext);
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	const whiteBlack = useColorModeValue("blue", "pink");

	return (
		<section id="projects">
			<Container maxWidth={isMobile ? "auto" : "1000px"}>
				<Box align="center">
					<Fade
						top={!isMobile}
						bottom={isMobile}
						duration={1000}
						delay={1000}
						distance="30px"
					>
						<Heading
							paddingTop={50}
							borderBottomColor={useColorModeValue("#32d142", "#84248c")}
							as="h3"
							variant="section-title"
						>
							Projects
						</Heading>
					</Fade>
				</Box>
				<Box>
					{projects &&
						projects.map((project) => {
							const { id, img, title, info, techStack, url, repo } = project;

							return (
								<SimpleGrid columns={isMobile ? 1 : 2} mb={10} key={id}>
									{isMobile ? (
										<Fade bottom duration={1000} delay={1000} distance="30px">
											<Heading color={whiteBlack} size="lg" as="h5">
												{title}
											</Heading>
											<Box mb={3} align="center">
												{img && (
													<Tilt>
														<Image alt={title} src={img} />
													</Tilt>
												)}
											</Box>
										</Fade>
									) : null}
									<Fade
										left={!isMobile}
										bottom={isMobile}
										duration={1000}
										delay={500}
										distance="30px"
									>
										<Box>
											{!isMobile ? (
												<Heading color={whiteBlack} size="lg" as="h5">
													{title}
												</Heading>
											) : null}
											<Box mb={4}>
												<Text mb={2}>{info}</Text>
												<Flex justify="center" alignContent="space-around" wrap>
													{techStack &&
														techStack.icons.map((icon, idx) => (
															<TechIcon
																key={idx}
																name={icon.name}
																url={icon.url}
															/>
														))}
												</Flex>
											</Box>
											<Flex
												wrap
												align="center"
												justifyContent={isMobile ? "center" : "auto"}
											>
												{url && <Button url={url} name="Demo Video" />}

												{repo && <Button url={repo} name="Source Code" />}
											</Flex>
										</Box>
									</Fade>
									{!isMobile ? (
										<Fade right duration={1000} delay={1000} distance="30px">
											<Box align="center" mt={5}>
												{img && (
													<Tilt>
														<Image alt={title} src={img} />
													</Tilt>
												)}
											</Box>
										</Fade>
									) : null}
								</SimpleGrid>
							);
						})}
				</Box>
			</Container>
		</section>
	);
};

export default Projects;
