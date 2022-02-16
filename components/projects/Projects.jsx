import { useContext } from "react";
import PortfolioContext from "../../context/context";
import {
	Container,
	Box,
	Heading,
	Text,
	useMediaQuery,
	useColorModeValue,
	Link,
	Image,
	Flex,
	SimpleGrid,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import NextLink from "next/link";
import Button from "../buttons/ButtonLink";
const Projects = () => {
	const { projects } = useContext(PortfolioContext);
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	return (
		<section id="projects">
			<Container bgColor="red" mt={20}>
				<Box align="center">
					<Heading
						w={"80%"}
						borderBottomColor={useColorModeValue("#32d142", "#84248c")}
						borderBottomWidth={2}
						mb={5}
						as="h3"
					>
						Projects
					</Heading>
				</Box>
				<Box>
					{projects &&
						projects.map((project) => {
							const { id, img, title, info, info2, url, repo } = project;

							return (
								<SimpleGrid columns={isMobile ? 1 : 2} mb={10} key={id}>
									<Fade
										left={!isMobile}
										bottom={isMobile}
										duration={1000}
										delay={500}
										distance="30px"
									>
										<Box>
											<Heading
												color={useColorModeValue("black", "#84248c")}
												size="lg"
												as="h5"
											>
												{title}
											</Heading>
											<Box mb={4}>
												<Text mb={2}>{info}</Text>
												<Text>{info2}</Text>
											</Box>

											<Box align={isMobile ? "center" : "auto"}>
												{url && <Button url={url} name="Demo Video" />}

												{repo && <Button url={repo} name="Source Code" />}
											</Box>
										</Box>
									</Fade>
									<Box align="center" mt={5}>
										{img && (
											<NextLink href={repo} passHref>
												<Link
													textDecorationStyle="none"
													target="_blank"
													rel="noopener noreferrer"
													_hover={{
														textDecorationLine: "none",
														bgGradient: useColorModeValue("white", "black"),
													}}
												>
													<Tilt>
														<Image alt={title} src={img} />
													</Tilt>
												</Link>
											</NextLink>
										)}
									</Box>
								</SimpleGrid>
							);
						})}
				</Box>
			</Container>
		</section>
	);
};

export default Projects;
