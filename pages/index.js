import Head from "next/head";
import { headData } from "../data/data";
import "../styles/Home.module.css";

export default function Home() {
	const { title, lang, description } = headData;

	return (
		<>
			<Head>
				<meta
					charSet="utf-8"
					name="viewport"
					content="width=device-width"
					initial-scale={1}
				/>
				<title>{title}</title>
				<html lang={lang} />
				<meta name="description" content={description} />
			</Head>
		</>
	);
}
