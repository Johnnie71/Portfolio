import Head from "next/head";
import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../navbar/NavBar";
import BottomNavBar from "../navbar/BottomNav";

const Main = ({ children, router }) => {
	// const [isMobile] = useMediaQuery("(max-width: 768px)");

	return (
		<Box as="main" pb={8}>
			<Head>
				<meta name="viewport" content="width=device-width initial-scale=1" />
				<title>Johnnie G</title>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
				></link>
			</Head>
			<NavBar path={router.asPath} />
			<Container maxW="98%" pt={14}>
				{children}
			</Container>
			{/* {isMobile ? <BottomNavBar /> : null} */}
		</Box>
	);
};

export default Main;
