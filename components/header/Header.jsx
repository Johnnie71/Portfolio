import React, { useContext, useState, useEffect } from "react";
// import { Center } from "@chakra-ui/react";
import PortfolioContext from "../../context/context";
// import { Link } from "react-scroll";
// import { Fade } from "react-reveal";

const Header = () => {
	const {
		header: { title, name, subtitle, cta },
	} = useContext(PortfolioContext);

	const [isMobile, setIsMobile] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 769) {
			setIsDesktop(true);
			setIsMobile(false);
		} else {
			setIsMobile(true);
			setIsDesktop(false);
		}
	}, []);

	return <section id="header">hello!</section>;
};

export default Header;
