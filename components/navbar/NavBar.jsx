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

const LinkItem = ({ href, path, children, ...props }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
	return (
		<NextLink href={href} passHref>
			<Link
				p={2}
				bg={active ? "turquoise" : undefined}
				color={active ? "#202023" : inactiveColor}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	);
};

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
						bgGradient="linear(to-l, #7928CA, #FF0080)"
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
					<LinkItem href="/about" path={path}>
						About
					</LinkItem>
					<LinkItem href="/projects" path={path}>
						Projects
					</LinkItem>
					<LinkItem href="/contact" path={path}>
						Contact
					</LinkItem>
				</Stack>
				<Box flex={1} align="right">
					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default NavBar;
