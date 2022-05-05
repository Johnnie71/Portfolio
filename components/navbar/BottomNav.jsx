import { Box, Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import HomeButton from "../buttons/HomeButton";

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
			borderWidth="2px"
			borderRadius="50px"
			borderColor={useColorModeValue("green", "purple2")}
			padding="10px"
		>
			<ScrollLink to="footer" smooth duration={2000}>
				<Box
					fontWeight="semibold"
					color={useColorModeValue("blue", "pink")}
					flex={1}
				>
					Contact
				</Box>
			</ScrollLink>
			<ScrollLink to="projects" smooth duration={2000}>
				<Box
					fontWeight="semibold"
					color={useColorModeValue("blue", "pink")}
					flex={1}
				>
					Projects
				</Box>
			</ScrollLink>
			<ScrollLink to="about" smooth duration={2000}>
				<Box
					// boxShadow="0px 8px 3px -8px white"
					fontWeight="semibold"
					color={useColorModeValue("blue", "pink")}
					flex={1}
				>
					About
				</Box>
			</ScrollLink>
			<ScrollLink to="header" smooth duration={2000}>
				<Box
					fontWeight="semibold"
					color={useColorModeValue("blue", "pink")}
					flex={1}
				>
					Home
				</Box>
			</ScrollLink>
		</Flex>
	);
};

export default BottomNavBar;
