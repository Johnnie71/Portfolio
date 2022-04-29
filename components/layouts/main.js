import Head from "next/head";
import Script from "next/script";
import { Box, Container } from "@chakra-ui/react";
import NavBar from "../navbar/NavBar";
const Main = ({ children, router }) => {
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
			<canvas id="canvas1"></canvas>
			<Script src="./header/particle.js"></Script>
			<NavBar path={router.asPath} />
			<Container maxW="98%" pt={14}>
				{children}
			</Container>
		</Box>
	);
};

export default Main;
