import React, { useContext, useState, useEffect } from "react";
import PortfolioContext from "../../context/context";

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

	return <h1>Header!</h1>;
};

export default Header;
