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

	return (
		<section id="header">
			<CanvasContainer />
			<Container
				height={!mobile ? "56vh" : "35vh"}
				minHeight={mobile ? "57vh" : "35vh"}
				maxWidth={mobile ? "auto" : 800}
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
									"linear(to-r, #1367d4, #32d142)",
									"linear(to-l, #7928CA, #FF0080)"
								)}
								bgClip="text"
								fontSize={mobile ? "3xl" : "6xl"}
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
							<Box as="text" fontSize="1em" ml={6} mb={0} align="center">
								<p>Welcome to my world!!</p>
							</Box>
						</Fade>
					</Box>
					<Box
						flexShrink={1}
						mt={{ base: 4, md: 4 }}
						ml={{ md: 1 }}
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
								borderColor={useColorModeValue("#32d142", "#84248c")}
								borderWidth={2}
								borderStyle="solid"
								boxSize="120px"
								// display="inline-block"
								borderRadius="full"
								src="/images/cartoon.png"
								alt="Profile Image"
								ml={2}
							/>
						</Fade>
					</Box>
				</Box>
			</Container>
		</section>
	);
};

export default Header;
