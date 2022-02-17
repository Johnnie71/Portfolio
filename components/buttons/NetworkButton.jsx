import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const NetworkLink = ({ name, url }) => {
	return (
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
				{name}
			</Link>
		</NextLink>
	);
};

export default NetworkLink;
