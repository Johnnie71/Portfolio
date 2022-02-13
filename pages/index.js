import { Helmet } from "react-helmet";
import { headData } from "../data/data";
import App from "../components/App";
import "../styles/Home.module.css";
import NavBar from "../components/navbar/NavBar";
export default function Home() {
	const { title, lang, description } = headData;

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" name="viewport" content="width=device-width" />
				<title>{title}</title>
				<html lang={lang} />
				<meta name="description" content={description} />
			</Helmet>
			<NavBar />
			<App />
		</>
	);
}
