import { Box, Image } from "@chakra-ui/react";

const TechIcon = ({ icon }) => {
	console.log(icon);
	return (
		<Box>
			<Image alt="hey" src={icon} />
		</Box>
	);
};

export default TechIcon;
