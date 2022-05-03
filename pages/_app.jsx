import React, { useState, useEffect } from "react";
import { PortfolioProvider } from "../context/context";
import {
	heroData,
	aboutData,
	projectsData,
	contactData,
	footerData,
} from "../data/data";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Layout from "../components/layouts/main";
import "@fontsource/indie-flower";

function App({ Component, pageProps, router }) {
	const [header, setHeader] = useState({});
	const [about, setAbout] = useState({});
	const [projects, setProjects] = useState([]);
	const [contact, setContact] = useState({});
	const [footer, setFooter] = useState({});

	useEffect(() => {
		setHeader({ ...heroData });
		setAbout({ ...aboutData });
		setProjects([...projectsData]);
		setContact({ ...contactData });
		setFooter({ ...footerData });
	}, []);

	return (
		<>
			<PortfolioProvider value={{ header, about, projects, contact, footer }}>
				<ChakraProvider theme={theme}>
					<Layout router={router}>
						<Component {...pageProps} key={router.router} />
					</Layout>
				</ChakraProvider>
			</PortfolioProvider>
		</>
	);
}

export default App;
