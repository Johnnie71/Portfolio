import React, { useState } from "react";
import {
	Container,
	Text,
	Box,
	Image,
	useColorModeValue,
	useMediaQuery,
} from "@chakra-ui/react";
// import { Link } from "react-scroll";
import { Fade } from "react-reveal";

const Header = () => {
	const [mobile] = useMediaQuery("(max-width: 768px)");

	return (
		<section id="header">
			<Container
				height={"100vh"}
				minHeight={"100vh"}
				maxWidth={mobile ? "auto" : 800}
			>
				<Box borderRadius="lg" mr={10} display={{ md: "flex" }}>
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
								fontSize={mobile ? "5xl" : "6xl"}
								fontWeight="extrabold"
								ml={5}
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
							<Box ml={6} mb={0} align="center">
								<p>Creative ( Artist / Engineer / For the Planet )</p>
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
								borderColor="whiteAplha.800"
								borderWidth={2}
								borderStyle="solid"
								boxSize="120px"
								display="inline-block"
								borderRadius="full"
								src="/images/profile.jpg"
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
