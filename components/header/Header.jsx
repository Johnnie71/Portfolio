import React, { useState, useEffect } from "react";
import {
	Container,
	Text,
	Box,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";
// import { Link } from "react-scroll";
import { Fade } from "react-reveal";

const Header = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 769) {
			setIsDesktop(true);
			setIsMobile(false);
		} else {
			setIsMobile(true);
			setIsDesktop(false);
		}
	}, []);

	return (
		<section id="header">
			<Container maxWidth={isDesktop ? 800 : "auto"}>
				<Box borderRadius="lg" mr={10} display={{ md: "flex" }}>
					{/* <Fade
						top={isDesktop}
						bottom={isMobile}
						duration={1000}
						delay={500}
						distance="30px"
					> */}
					<Box
						flexGrow={1}
						justifyContent="center"
						align={isMobile ? "center" : "auto"}
					>
						<Text
							bgGradient={useColorModeValue(
								"linear(to-r, #1367d4, #32d142)",
								"linear(to-l, #7928CA, #FF0080)"
							)}
							bgClip="text"
							fontSize={isMobile ? "5xl" : "6xl"}
							fontWeight="extrabold"
						>
							Johnnie Gonzalez
						</Text>
						<Box align="center">
							<p>Creative ( Artist / Engineer / For the Planet )</p>
						</Box>
					</Box>
					{/* </Fade> */}
					<Box
						flexShrink={1}
						mt={{ base: 4, md: 4 }}
						ml={{ md: 1 }}
						align="center"
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
					</Box>
				</Box>
			</Container>
		</section>
	);
};

export default Header;
