import { useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

const ContactButton = (props) => {
	const bluePink = useColorModeValue("#1367d4", "#FF0080");
	const greenPurple = useColorModeValue("#32d142", "#7928CA");
	const lightBlueLightPink = useColorModeValue("#87c1f5", "#ff70b7");
	const lightGreenLightPurple = useColorModeValue("#87f5be", "#b17de5");
	return (
		<Icon viewBox="0 2 67 67" {...props}>
			<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
				<defs>
					<linearGradient
						id="x"
						x1="51.063"
						x2="51.063"
						y1="92.496"
						y2="109.07"
						gradientTransform="scale(.3721)"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor={lightBlueLightPink}></stop>
						<stop offset="1" stopColor={lightGreenLightPurple}></stop>
					</linearGradient>
					<linearGradient
						id="y"
						x1="51.063"
						x2="51.063"
						y1="71.442"
						y2="89.83"
						gradientTransform="scale(.3721)"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor={lightBlueLightPink}></stop>
						<stop offset="1" stopColor={lightGreenLightPurple}></stop>
					</linearGradient>
					<linearGradient
						id="z"
						x1="86"
						x2="86"
						y1="20.828"
						y2="153.198"
						gradientTransform="scale(.3721)"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor={bluePink}></stop>
						<stop offset="1" stopColor={greenPurple}></stop>
					</linearGradient>
				</defs>
				<path
					fill="url(#x)"
					d="M24.809 37.5A7.974 7.974 0 0119 40a7.97 7.97 0 01-5.809-2.5A7.974 7.974 0 0119 35c2.29 0 4.352.96 5.809 2.5zm0 0"
				></path>
				<path
					fill="url(#y)"
					d="M19 27a3 3 0 10.002 6.002A3 3 0 0019 27zm0 0"
				></path>
				<path
					fill="url(#z)"
					d="M57 29c0-1.652-1.348-3-3-3v-2c1.652 0 3-1.348 3-3s-1.348-3-3-3v-5c0-2.758-2.242-5-5-5h-1c0-1.102-.898-2-2-2h-4c-1.102 0-2 .898-2 2H23c-2.758 0-5 2.242-5 5v7.05C11.852 20.563 7 25.72 7 32s4.852 11.438 11 11.95V51c0 2.758 2.242 5 5 5h17c0 1.102.898 2 2 2h4c1.102 0 2-.898 2-2h1c2.758 0 5-2.242 5-5v-3c1.652 0 3-1.348 3-3s-1.348-3-3-3v-2c1.652 0 3-1.348 3-3s-1.348-3-3-3v-2c1.652 0 3-1.348 3-3zM23 10h17v9H28c-1.102 0-2 .898-2 2v1.273a11.877 11.877 0 00-6-2.222V13c0-1.652 1.348-3 3-3zm5 14.09V21h12v6H29.895A11.92 11.92 0 0028 24.09zM9 32c0-5.516 4.484-10 10-10s10 4.484 10 10-4.484 10-10 10S9 37.516 9 32zm14 22c-1.652 0-3-1.348-3-3v-7.05c6.148-.513 11-5.669 11-11.95 0-1.04-.145-2.04-.395-3H40v2h-7v2h7v2h-7v2h7v2h-7v2h7v2H30v2h10v9zm32-25c0 .55-.45 1-1 1v-2c.55 0 1 .45 1 1zm0-8c0 .55-.45 1-1 1v-2c.55 0 1 .45 1 1zM42 56V8h4l.004 48zm13-11c0 .55-.45 1-1 1v-2c.55 0 1 .45 1 1zm0-8c0 .55-.45 1-1 1v-2c.55 0 1 .45 1 1zm-3-1v6h-2v2h2v7c0 1.652-1.348 3-3 3h-1V10h1c1.652 0 3 1.348 3 3v5h-2v2h2v6h-2v2h2v6h-2v2zm0 0"
				></path>
			</svg>
		</Icon>
	);
};

export default ContactButton;
