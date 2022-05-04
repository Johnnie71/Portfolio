import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const BottomNavBar = () => {
	return (
		<Flex
			position="fixed"
			align="center"
			justify="space-around"
			wrap="wrap"
			w="100%"
			as="nav"
			h="72px"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			css={{ backdropFilter: "blur(5px)" }}
			zIndex={1}
			bottom={0}
			borderWidth="3px"
			borderRadius="50px"
			borderColor={useColorModeValue("#32d142", "#84248c")}
			padding="10px"
		>
			<ScrollLink to="projects" smooth duration={2000}>
				<Box flex={1}>Projects</Box>
			</ScrollLink>
			<ScrollLink to="about" smooth duration={2000}>
				<Box flex={1}>About</Box>
			</ScrollLink>
			<ScrollLink to="footer" smooth duration={2000}>
				<Box flex={1}>Contact</Box>
			</ScrollLink>
			<ScrollLink to="header" smooth duration={2000}>
				<Box flex={1}>Home</Box>
			</ScrollLink>
		</Flex>
	);
};

export default BottomNavBar;
