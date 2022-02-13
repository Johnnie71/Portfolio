import React, { useContext, useState, useEffect } from "react";
import { Center, Text } from "@chakra-ui/react";
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
			<Center>
				<Fade
					top={isDesktop}
					bottom={isMobile}
					duration={1000}
					delay={500}
					distance="30px"
				>
					<Text
						bgGradient="linear(to-l, #7928CA, #FF0080)"
						bgClip="text"
						fontSize="6xl"
						fontWeight="extrabold"
					>
						{name}
					</Text>
				</Fade>
			</Center>
		</section>
	);
};

export default Header;
