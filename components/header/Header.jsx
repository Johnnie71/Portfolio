import {
	Container,
	Text,
	Box,
	Image,
	useColorModeValue,
	useMediaQuery,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import CanvasContainer from "../canvas/Canvas";

const Header = () => {
	const [mobile] = useMediaQuery("(max-width: 768px)");
	const colorTheme = useColorModeValue("#1367d4", "#8352fd");

	return (
		<section id="header">
			<CanvasContainer mobile={mobile} color={colorTheme} />
			<Container
				height={!mobile ? "56vh" : "35vh"}
				minHeight={mobile ? "57vh" : "35vh"}
				maxWidth={mobile ? "auto" : "80%"}
			>
				<Box borderRadius="lg" display={{ md: "flex" }}>
					<Box flexGrow={1} justifyContent="center" align={"center"}>
						<Fade
							top={!mobile}
							bottom={mobile}
							duration={1000}
							delay={500}
							distance="30px"
						>
							<Text
								bgGradient={useColorModeValue(
									"linear(to-r, blue, green)",
									"linear(to-l, purple1, pink)"
								)}
								bgClip="text"
								fontSize={{ base: "27px", md: "40px", lg: "75px" }}
								fontWeight="extrabold"
							>
								Johnnie Gonzalez
							</Text>
						</Fade>
						<Fade
							top={!mobile}
							bottom={mobile}
							duration={1000}
							delay={900}
							distance="30px"
						>
							<Box
								as="text"
								fontSize={{ base: "23px", md: "30px", lg: "2rem", xl: "2.5em" }}
								ml={6}
								mb={0}
								align="center"
								fontWeight="extrabold"
								fontFamily="Indie Flower, sans-serif"
							>
								<p>Welcome to my world!</p>
							</Box>
						</Fade>
					</Box>
					<Box
						flexShrink={1}
						mt={{ base: 4, md: 4 }}
						// ml={{ md: 1 }}
						align="center"
					>
						<Fade
							top={!mobile}
							bottom={mobile}
							duration={1000}
							delay={500}
							distance="30px"
						>
							<Image
								borderColor={useColorModeValue("green", "purple2")}
								borderWidth={2}
								borderStyle="solid"
								boxSize={{ base: "120px", md: "8rem", lg: "12rem" }}
								borderRadius="full"
								src="/images/cartoon.png"
								alt="Profile Image"
							/>
						</Fade>
					</Box>
				</Box>
			</Container>
		</section>
	);
};

export default Header;
