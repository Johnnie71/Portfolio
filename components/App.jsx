import React, { useState, useEffect } from "react";
import { PortfolioProvider } from "../context/context";
import {
	heroData,
	aboutData,
	projectsData,
	contactData,
	footerData,
} from "../data/data";
import Header from "./header/Header";
import About from "../components/about/About";

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
				<br />
				<Header />
				<About />
			</PortfolioProvider>
		</>
	);
}

export default App;
