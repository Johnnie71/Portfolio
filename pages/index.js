import NavBar from "../components/navbar/NavBar";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Header />
			<br />
			<About />
			<Projects />
			<br />
			<Footer />
		</>
	);
}
