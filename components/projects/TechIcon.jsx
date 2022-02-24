import { Image, Container } from "@chakra-ui/react";

const TechIcon = ({ name, url }) => {
	return (
		<Container key={name}>
			<Image maxH="3rem" alt={name} src={url} />
		</Container>
	);
};

export default TechIcon;
