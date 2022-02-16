import React, { useState, useEffect } from "react";
import { PortfolioProvider } from "../context/context";
import {
	heroData,
	aboutData,
	projectsData,
	contactData,
	footerData,
} from "../data/data";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import NavBar from "../components/navbar/NavBar";
import Fonts from "../public/fonts";

function App() {
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
			<ChakraProvider theme={theme}>
				<Fonts />
				<PortfolioProvider value={{ header, about, projects, contact, footer }}>
					<NavBar />
					<br />
					<br />
					<Header />
					<About />
					<Projects />
				</PortfolioProvider>
			</ChakraProvider>
		</>
	);
}

export default App;
