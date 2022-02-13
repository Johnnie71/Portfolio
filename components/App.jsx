import React, { useState, useEffect } from "react";
import { PortfolioProvider } from "../context/context";
import {
	heroData,
	aboutData,
	projectsData,
	contactData,
	footerData,
} from "../data/data";

function App() {
	const [hero, setHero] = useState({});
	const [about, setAbout] = useState({});
	const [projects, setProjects] = useState([]);
	const [contact, setContact] = useState({});
	const [footer, setFooter] = useState({});

	useEffect(() => {
		setHero({ ...heroData });
		setAbout({ ...aboutData });
		setProjects([...projectsData]);
		setContact({ ...contactData });
		setFooter({ ...footerData });
	}, []);

	return (
		<PortfolioProvider value={{ hero, about, projects, contact, footer }}>
			hello
		</PortfolioProvider>
	);
}

export default App;
