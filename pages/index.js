import { Helmet } from "react-helmet";
import { headData } from "../data/data";
import App from "./_app";
import "../styles/Home.module.css";

export default function Home() {
	const { title, lang, description } = headData;

	return (
		<>
			<Helmet>
				<meta
					charSet="utf-8"
					name="viewport"
					content="width=device-width"
					initial-scale={1}
				/>
				<title>hello!</title>
				<html lang={lang} />
				<meta name="description" content={description} />
			</Helmet>
			<App />
		</>
	);
}
