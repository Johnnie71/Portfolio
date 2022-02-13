import React from "react";
import { Helmet } from "react-helmet";
import { headData } from "../data/data";
import "../styles/Home.module.css";

export default function Home() {
	const { title, lang, description } = headData;
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{title}</title>
				<html lang={lang} />
				<meta name="description" content={description} />
			</Helmet>
		</>
	);
}
