import { useState, useEffect, useContext } from "react";
import PortfolioContext from "../../context/context";
import {
	Container,
	Text,
	Box,
	Heading,
	Button,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import NextLink from "next/link";

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
			<Container align="center">
				<Fade
					top={isDesktop}
					bottom={isMobile}
					duration={1000}
					delay={1000}
					distance="30px"
				>
					<Heading textDecoration="underline">About</Heading>
				</Fade>
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
				</Fade>
				<Box>
					<Fade bottom duration={1000} delay={1000} distance="30px">
						<NextLink href={"/Resume.PDF"} passHref>
							<Link
								textDecorationStyle="none"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button
									color={useColorModeValue("white", "black")}
									bg={useColorModeValue("#00b1fc", "#d93296")}
									borderColor={useColorModeValue("#00b1fc", "#d93296")}
									borderRadius={20}
									borderWidth={2}
									variant="solid"
								>
									Resume
								</Button>
							</Link>
						</NextLink>
					</Fade>
					{/* </a> */}
				</Box>
			</Container>
		</section>
	);
};

export default About;
