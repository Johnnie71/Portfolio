import { useMediaQuery, Link, useColorModeValue, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faMedium,
} from "@fortawesome/free-brands-svg-icons";

const NetworkLink = ({ name, url }) => {
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	const getIcon = (social) => {
		switch (social) {
			case "twitter":
				return faTwitter;
				break;

			case "linkedin":
				return faLinkedin;
				break;

			case "medium":
				return faMedium;
				break;

			case "github":
				return faGithub;
				break;

			default:
				return null;
		}
	};

	return (
		<Box>
			<NextLink href={url} passHref>
				<Link
					aria-label={name}
					textDecorationStyle="none"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={getIcon(name)} size={isMobile ? "2x" : "3x"} />
				</Link>
			</NextLink>
		</Box>
	);
};

export default NetworkLink;
