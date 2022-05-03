import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
	global: (props) => ({
		body: {
			bg: mode("#f0e7db", "#202023")(props),
		},
		fonts: {
			heading: "Indie Flower, sans-serif",
		},
	}),
};

const components = {
	Heading: {
		variants: {
			"section-title": {
				borderBottomWidth: "2px",
				width: "80%",
				marginBottom: 5,
			},
		},
	},
	Link: {
		baseStyle: (props) => ({
			color: mode("#3d7aed", "#ff63c3")(props),
			textUnderlineOffset: 3,
		}),
	},
};

const fonts = {
	heading: "Indie Flower, sans-serif",
};

const colors = {
	pink: "#FF0080",
	purple1: "#7928CA",
	purple2: "#84248c",
	blue: "#1367d4",
	green: "#32d142",
};

const config = {
	initialColorMode: "light",
	useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
