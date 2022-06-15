import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faMedium,
} from "@fortawesome/free-brands-svg-icons";

const NetworkLink = ({ name, url }) => {
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
		<NextLink href={url} passHref>
			<Link
				aria-label={name}
				textDecorationStyle="none"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon height="3rem" width="100%" icon={getIcon(name)} />
			</Link>
		</NextLink>
	);
};

export default NetworkLink;
