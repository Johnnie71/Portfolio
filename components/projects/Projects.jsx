import { useContext } from "react";
import PortfolioContext from "../../context/context";
import {
	Container,
	Box,
	Heading,
	Text,
	useMediaQuery,
	useColorModeValue,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import NextLink from "next/link";

const Projects = () => {
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	return (
		<section id="projects">
			<Container>Hello!</Container>
		</section>
	);
};
