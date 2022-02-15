import { useState, useEffect, useContext } from "react";
import PortfolioContext from "../../context/context";
import {
	Container,
	Text,
	Box,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";

const About = () => {
	const { about } = useContext(PortfolioContext);

	const { paragraphOne, paragraphTwo, paragraphThree } = about;

	const [isDesktop, setIsDesktop] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

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
		<section id="about">
			<Container></Container>
		</section>
	);
};

export default About;
