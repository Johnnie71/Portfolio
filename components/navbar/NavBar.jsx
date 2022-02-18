import NextLink from "next/link";
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
	Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "../theme-toggle-button";
import { Link as ScrollLink } from "react-scroll";

// const LinkItem = ({ href, path, children, ...props }) => {
// 	const active = path === href;
// 	const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
// 	return (
// 		<NextLink href={href} passHref>
// 			<Link
// 				p={2}
// 				bg={active ? "turquoise" : undefined}
// 				color={active ? "#202023" : inactiveColor}
// 				{...props}
// 			>
// 				{children}
// 			</Link>
// 		</NextLink>
// 	);
// };

const NavBar = (props) => {
	const { path } = props;

	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			css={{ backdropFilter: "blur(5px)" }}
			zIndex={1}
			{...props}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.md"
				wrap="wrap"
				align="center"
				justify="space-between"
			>
				<Flex align="center" mr={5}>
					<Text
						bgGradient={useColorModeValue(
							"linear(to-r, #1367d4, #32d142)",
							"linear(to-l, #7928CA, #FF0080)"
						)}
						bgClip="text"
						fontSize="xl"
						fontWeight="bold"
					>
						JG
					</Text>
				</Flex>
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
				<Box flex={1} align="right">
					<ThemeToggleButton />
					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<MenuItem>
									<ScrollLink to="about" smooth duration={2000}>
										About
									</ScrollLink>
								</MenuItem>
								<MenuItem>
									<ScrollLink to="projects" smooth duration={2000}>
										Projects
									</ScrollLink>
								</MenuItem>
								<MenuItem>
									<ScrollLink to="footer" smooth duration={2000}>
										Contact
									</ScrollLink>
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default NavBar;
