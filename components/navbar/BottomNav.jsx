import { Box, Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import AboutButton from "../buttons/AboutButton";
import ContactButton from "../buttons/ContactButton";
import HomeButton from "../buttons/HomeButton";
import ProjectButton from "../buttons/ProjectButton";

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
				<Box fontWeight="semibold" flex={1}>
					<ContactButton w="40px" h="40px" />
				</Box>
			</ScrollLink>
			<ScrollLink to="projects" smooth duration={2000}>
				<Box fontWeight="semibold" flex={1}>
					<ProjectButton w="45px" h="45px" />
				</Box>
			</ScrollLink>
			<ScrollLink to="about" smooth duration={2000}>
				<Box fontWeight="semibold" flex={1}>
					<AboutButton w="45px" h="45px" />
				</Box>
			</ScrollLink>
			<ScrollLink to="header" smooth duration={2000}>
				<Box fontWeight="semibold" flex={1}>
					<HomeButton w="45px" h="45px" />
				</Box>
			</ScrollLink>
		</Flex>
	);
};

export default BottomNavBar;
