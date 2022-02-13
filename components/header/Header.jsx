import React, { useContext, useState, useEffect } from "react";
import PortfolioContext from "../../context/context";

const Header = () => {
	const {
		header: { title, name, subtitle, cta },
	} = useContext(PortfolioContext);

	return <h1>Header!</h1>;
};

export default Header;
