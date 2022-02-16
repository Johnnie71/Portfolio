import React, { useContext } from "react";
import PortfolioContext from "../../context/context";
import {
	Container,
	Box,
	Heading,
	Text,
	useMediaQuery,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import NextLink from "next/link";

const Projects = () => {
	const { projects } = useContext(PortfolioContext);
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	return (
		<section id="projects">
			<Container mt={20}>
				<Box>
					{projects &&
						projects.map((project) => {
							const { id, img, title, info, info2, url, repo } = project;

							return (
								<Box mb={10} key={id}>
									<Heading as="h5">{title}</Heading>
									<Box>
										<Text>{info}</Text>
										<Text>{info2}</Text>
									</Box>
									{url && (
										<NextLink href={url} passHref>
											<Link
												textDecorationStyle="none"
												target="_blank"
												rel="noopener noreferrer"
												_hover={{
													textDecorationLine: "none",
													bgGradient: useColorModeValue("white", "black"),
												}}
											>
												<Box
													color={useColorModeValue("white", "black")}
													p={3}
													fontWeight="bold"
													borderRadius={20}
													bgGradient={useColorModeValue(
														"linear(to-r, #1367d4, #32d142)",
														"linear(to-l, #7928CA, #FF0080)"
													)}
													transition="padding .5s"
													_hover={{ padding: 2 }}
													as="button"
													variant="solid"
												>
													Demo Video
												</Box>
											</Link>
										</NextLink>
									)}
								</Box>
							);
						})}
				</Box>
			</Container>
		</section>
	);
};

export default Projects;
