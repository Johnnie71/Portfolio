import {
	Container,
	Box,
	Stack,
	useColorModeValue,
	useMediaQuery,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const BottomNavBar = () => {
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	return (
		<Box
			display={!isMobile ? "none" : "hidden"}
			position="fixed"
			w="100%"
			as="nav"
			h="72px"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			css={{ backdropFilter: "blur(5px)" }}
			zIndex={1}
			bottom={0}
		>
			<ScrollLink to="about" smooth duration={2000}>
				About
			</ScrollLink>
			<ScrollLink to="projects" smooth duration={2000}>
				Projects
			</ScrollLink>
			<ScrollLink to="footer" smooth duration={2000}>
				Contact
			</ScrollLink>
		</Box>
	);
};

export default BottomNavBar;
