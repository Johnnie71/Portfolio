import {
	Container,
	Stack,
	useColorModeValue,
	useMediaQuery,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const BottomNavBar = (props) => {
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	return (
		<Container
			display={!isMobile ? "none" : "hidden"}
			position="fixed"
			w="100%"
			borderRadius="20px"
			as="nav"
			h="4rem"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			borderWidth="3px"
			borderColor={useColorModeValue("#20202380", "#ffffff40")}
			css={{ backdropFilter: "blur(5px)" }}
			zIndex={2}
			bottom={0}
			{...props}
		>
			<Stack
				direction="row"
				display="flex"
				wrap="wrap"
				width="auto"
				alignItems="center"
				flexGrow={1}
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
			</Stack>
		</Container>
	);
};

export default BottomNavBar;
