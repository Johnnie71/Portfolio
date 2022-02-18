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
import Footer from "../components/footer/Footer";

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
			<PortfolioProvider value={{ header, about, projects, contact, footer }}>
				<ChakraProvider theme={theme}>
					<Fonts />
					<NavBar />
					<br />
					<br />
					<Header />
					<br />
					<About />
					<Projects />
					<br />
					<Footer />
				</ChakraProvider>
			</PortfolioProvider>
		</>
	);
}

export default App;
