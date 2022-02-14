import React, { useContext, useState, useEffect } from "react";
import {
	Container,
	Text,
	Box,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";
import PortfolioContext from "../../context/context";
// import { Link } from "react-scroll";
import { Fade } from "react-reveal";

const Header = () => {
	const {
		header: { title, name, subtitle, cta },
	} = useContext(PortfolioContext);

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
			<Container>
				{/* <Fade
					top={isDesktop}
					bottom={isMobile}
					duration={1000}
					delay={500}
					distance="30px"
				> */}
				<Box borderRadius="lg" display={{ md: "flex" }}>
					<Box flexGrow={1}>
						<Text
							bgGradient={useColorModeValue(
								"linear(to-r, #1367d4, #32d142)",
								"linear(to-l, #7928CA, #FF0080)"
							)}
							bgClip="text"
							fontSize="6xl"
							fontWeight="extrabold"
						>
							{name}
						</Text>

						<p>Creative ( Artist / Developer / For the Planet )</p>
					</Box>
					<Box
						flexShrink={1}
						mt={{ base: 4, md: 8 }}
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
							fallbackSrc="https://via.placeholder.com/150"
							alt="Profile Image"
						/>
					</Box>
					{/* </Fade> */}
				</Box>
			</Container>
		</section>
	);
};

export default Header;
