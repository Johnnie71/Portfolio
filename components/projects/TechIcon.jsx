import { Box, Image } from "@chakra-ui/react";

const TechIcon = ({ tech, key }) => {
	console.log(tech);
	// const getUrl = (icon) => {
	// 	switch (icon.name) {
	// 		case "nodejs":
	// 			return icon.nodejs;

	// 		case "react":
	// 			return icon.react;

	// 		case "ruby":
	// 			return icon.ruby;

	// 		case "postgre":
	// 			return icon.postgre;

	// 		case "javaScript":
	// 			return icon.javaScript;

	// 		case "redux":
	// 			return icon.redux;
	// 	}
	// };

	return (
		<Box key={key}>
			<Image alt="hey" src="null" />
		</Box>
	);
};

export default TechIcon;
