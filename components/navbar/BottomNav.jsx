import {
	Container,
	Box,
	Stack,
	useColorModeValue,
	useMediaQuery,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const BottomNavBar = (props) => {
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	return (
		<Box
			display={!isMobile ? "none" : "hidden"}
			position="fixed"
			w="90%"
			as="nav"
			h="4rem"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			// css={{ backdropFilter: "blur(5px)" }}
			zIndex={2}
			bottom={0}
			{...props}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.sm"
				wrap="wrap"
				align="center"
				justify="space-between"
				color={"red"}
			>
				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
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
		</Box>
	);
};

export default BottomNavBar;
