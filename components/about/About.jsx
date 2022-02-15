import { useState, useEffect, useContext } from "react";
import PortfolioContext from "../../context/context";
import {
	Container,
	Text,
	Box,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

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
			<Container>
				<Fade
					right={isDesktop}
					bottom={isMobile}
					duration={1000}
					delay={1000}
					distance="30px"
				>
					<Box mb={5}>
						<Text>{paragraphOne}</Text>
					</Box>
					<Box mb={5}>
						<Text>{paragraphTwo}</Text>
					</Box>
					<Box>
						<Text>{paragraphThree}</Text>
					</Box>
					<span>
						{/* <a
							target="_blank"
							rel="noopener noreferrer"
							className="cta-btn cta-btn--resume"
							href={JohnnieResume}
						> */}
						Resume
						{/* </a> */}
					</span>
				</Fade>
			</Container>
		</section>
	);
};

export default About;
