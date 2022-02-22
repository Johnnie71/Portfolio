import { Box, Image } from "@chakra-ui/react";

const TechIcon = ({ icon, key }) => {
	console.log(icon);
	return (
		<Box key={key}>
			<Image alt="hey" src={icon} />
		</Box>
	);
};

export default TechIcon;
