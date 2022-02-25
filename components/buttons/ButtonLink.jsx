import { Box, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const Button = ({ url, name }) => {
	return (
		<Box p={2}>
			<NextLink href={url} passHref>
				<Link
					textDecorationStyle="none"
					target="_blank"
					rel="noopener noreferrer"
					_hover={{
						textDecorationLine: "none",
						bgGradient: useColorModeValue("white", "black"),
					}}
				>
					<Box
						color={useColorModeValue("white", "black")}
						p={3}
						fontWeight="bold"
						borderRadius={20}
						bgGradient={useColorModeValue(
							"linear(to-r, #1367d4, #32d142)",
							"linear(to-l, #7928CA, #FF0080)"
						)}
						transition="padding .5s"
						_hover={{ padding: 2 }}
						as="button"
						variant="solid"
					>
						{name}
					</Box>
				</Link>
			</NextLink>
		</Box>
	);
};

export default Button;
