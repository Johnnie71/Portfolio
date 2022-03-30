import {
	Container,
	Box,
	Stack,
	useColorModeValue,
	useMediaQuery,
	Li,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const BottomNavBar = (props) => {
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	return (
		<Container
			display={!isMobile ? "flex" : "hidden"}
			position="fixed"
			w="100%"
			borderRadius="full"
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
			<Box
				p={2}
				maxW="container.sm"
				wrap="wrap"
				align="center"
				justify="space-between"
				color="red"
			>
				<Stack
					direction="row"
					display="flex"
					width="auto"
					alignItems="center"
					flexGrow={1}
					mt={{ base: 2.5, md: 0 }}
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
			</Box>
		</Container>
	);
};

export default BottomNavBar;
