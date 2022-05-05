import { useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

const ContactButton = (props) => {
	const bluePink = useColorModeValue("#1367d4", "#FF0080");
	const greenPurple = useColorModeValue("#32d142", "#7928CA");
	const lightBlueLightPink = useColorModeValue("#87c1f5", "#ff70b7");
	const lightGreenLightPurple = useColorModeValue("#87f5be", "#b17de5");
	return (
		<Icon viewBox="0 4 57 57" {...props}>
			<svg xmlns="http://www.w3.org/2000/svg">
				<linearGradient
					id="a"
					x1="19"
					x2="19"
					y1="34.417"
					y2="40.584"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor={bluePink}></stop>
					<stop offset="1" stopColor={greenPurple}></stop>
				</linearGradient>
				<path
					fill="url(#a)"
					d="M24.81 37.5A7.977 7.977 0 0119 40c-2.29 0-4.35-.96-5.81-2.5A7.977 7.977 0 0119 35c2.29 0 4.35.96 5.81 2.5z"
				></path>
				<linearGradient
					id="b"
					x1="19"
					x2="19"
					y1="26.583"
					y2="33.425"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor="#6dc7ff"></stop>
					<stop offset="1" stopColor="#e6abff"></stop>
				</linearGradient>
				<path fill="url(#b)" d="M19 27a3 3 0 100 6 3 3 0 100-6z"></path>
				<linearGradient
					id="c"
					x1="32"
					x2="32"
					y1="7.75"
					y2="57.004"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor="#1a6dff"></stop>
					<stop offset="1" stopColor="#c822ff"></stop>
				</linearGradient>
				<path
					fill="url(#c)"
					d="M57 29c0-1.654-1.346-3-3-3v-2c1.654 0 3-1.346 3-3s-1.346-3-3-3v-5c0-2.757-2.243-5-5-5h-1c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2H23c-2.757 0-5 2.243-5 5v7.051C11.85 20.562 7 25.72 7 32s4.85 11.438 11 11.949V51c0 2.757 2.243 5 5 5h17c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2h1c2.757 0 5-2.243 5-5v-3c1.654 0 3-1.346 3-3s-1.346-3-3-3v-2c1.654 0 3-1.346 3-3s-1.346-3-3-3v-2c1.654 0 3-1.346 3-3zM23 10h17v9H28c-1.103 0-2 .897-2 2v1.273a11.912 11.912 0 00-6-2.222V13c0-1.654 1.346-3 3-3zm5 14.089V21h12v6H29.895A12.002 12.002 0 0028 24.089zM9 32c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10S9 37.514 9 32zm14 22c-1.654 0-3-1.346-3-3v-7.051C26.15 43.438 31 38.28 31 32c0-1.038-.146-2.039-.395-3H40v2h-7v2h7v2h-7v2h7v2h-7v2h7v2H30v2h10v9H23zm32-25a1 1 0 01-1 1v-2a1 1 0 011 1zm0-8a1 1 0 01-1 1v-2a1 1 0 011 1zM42 56V8h4l.002 48H42zm13-11a1 1 0 01-1 1v-2a1 1 0 011 1zm0-8a1 1 0 01-1 1v-2a1 1 0 011 1zm-3-1v6h-2v2h2v7c0 1.654-1.346 3-3 3h-1V10h1c1.654 0 3 1.346 3 3v5h-2v2h2v6h-2v2h2v6h-2v2h2z"
				></path>
			</svg>
		</Icon>
	);
};

export default ContactButton;
