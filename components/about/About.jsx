import { useContext } from "react";
import PortfolioContext from "../../context/context";
import {
	Container,
	Text,
	Box,
	Heading,
	useColorModeValue,
	Link,
	useMediaQuery,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import NextLink from "next/link";

const About = () => {
	const {
		about: { paragraphOne, paragraphTwo, paragraphThree },
	} = useContext(PortfolioContext);

	const [isMobile] = useMediaQuery("(max-width: 768px)");

	return (
		<section id="about">
			<Container align="center">
				<Fade
					top={!isMobile}
					bottom={isMobile}
					duration={1000}
					delay={1000}
					distance="30px"
				>
					<Heading
						paddingTop={50}
						borderBottomColor={useColorModeValue("green", "purple2")}
						as="h3"
						variant="section-title"
					>
						About
					</Heading>
				</Fade>
				<Fade
					right={!isMobile}
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
					<Box mb={6}>
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
										"linear(to-r, blue, green)",
										"linear(to-l, purple1, pink)"
									)}
									transition="padding .5s"
									_hover={{ padding: 2 }}
									as="button"
									variant="solid"
								>
									Resume
								</Box>
							</Link>
						</NextLink>
					</Fade>
				</Box>
			</Container>
		</section>
	);
};

export default About;
