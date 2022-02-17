import { Box, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { SocialMediaIconsReact } from "social-media-icons-react";

const NetworkLink = ({ name, url }) => {
	return (
		// <NextLink href={url} passHref>
		// 	<Link
		// 		textDecorationStyle="none"
		// 		target="_blank"
		// 		rel="noopener noreferrer"
		// 		_hover={{
		// 			textDecorationLine: "none",
		// 			bgGradient: useColorModeValue("white", "black"),
		// 		}}
		// 	>
		// 		{name}
		// 	</Link>
		// </NextLink>
		<Box>
			{/* <SocialMediaIconsReact
				borderWidth="2"
				borderStyle="solid"
				icon="github"
				iconColor="rgba(150,43,150,1)"
				backgroundColor="rgba(153,65,152,0)"
				iconSize="5"
				roundness="50%"
				url={url}
				size="53"
			/> */}
			Hello!
		</Box>
	);
};

export default NetworkLink;
