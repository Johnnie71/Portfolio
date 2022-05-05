import { Icon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";

const HomeButton = (props) => {
	const bluePink = useColorModeValue("#1367d4", "#FF0080");
	const greenPurple = useColorModeValue("#32d142", "#7928CA");
	const lightBlueLightPink = useColorModeValue("#87c1f5", "#ff70b7");
	const lightGreenLightPurple = useColorModeValue("#87f5be", "#b17de5");
	return (
		<Icon viewBox="0 3 56 56" {...props}>
			<svg xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient
						id="a"
						x1="129"
						x2="129"
						y1="111.754"
						y2="135.052"
						gradientTransform="scale(.3721)"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor={bluePink}></stop>
						<stop offset="1" stopColor={greenPurple}></stop>
					</linearGradient>
					<linearGradient
						id="b"
						x1="69.875"
						x2="69.875"
						y1="31.801"
						y2="140.207"
						gradientTransform="scale(.3721)"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor={bluePink}></stop>
						<stop offset="1" stopColor={greenPurple}></stop>
					</linearGradient>
					<linearGradient
						id="c"
						x1="67.188"
						x2="67.188"
						y1="31.801"
						y2="140.207"
						gradientTransform="scale(.3721)"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor={bluePink}></stop>
						<stop offset="1" stopColor={greenPurple}></stop>
					</linearGradient>
					<linearGradient
						id="d"
						x1="86"
						x2="86"
						y1="31.801"
						y2="140.207"
						gradientTransform="scale(.3721)"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0" stopColor={bluePink}></stop>
						<stop offset="1" stopColor={greenPurple}></stop>
					</linearGradient>
				</defs>
				<path
					fill="url(#a)"
					d="M50 42h-4c-.55 0-1 .45-1 1v7h6v-7c0-.55-.45-1-1-1zm0 0"
				></path>
				<path fill="url(#b)" d="M25 41h2v4h-2zm0 0"></path>
				<path fill="url(#c)" d="M19 30h12v2H19zm0 0"></path>
				<path
					fill="url(#d)"
					d="M56 32v-2c0-1.102-.898-2-2-2H42v-2c1.102 0 2-.898 2-2v-2c0-1.102-.898-2-2-2h-.383l-3.445-6.895A1.997 1.997 0 0036.382 12H13.618c-.762 0-1.445.426-1.789 1.105L8.383 20H8c-1.102 0-2 .898-2 2v2c0 1.102.898 2 2 2v24c0 1.102.898 2 2 2h44c1.102 0 2-.898 2-2V38c1.102 0 2-.898 2-2v-2c0-1.102-.898-2-2-2zm-2-2v2H42v-2zM13.617 14h22.766l3 6H10.617zM8 22h34v2H8zm32 4v16h-4v2h4v2h-9v-9c0-1.652-1.348-3-3-3h-6c-1.652 0-3 1.348-3 3v9h-9v-2h4v-2h-4V26zM10 50v-2h9v2zm11 0V37c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v13zm10 0v-2h9v2zm23 0H42V38h12zm2-14H42v-2h14zm0 0"
				></path>
			</svg>
		</Icon>
	);
};

export default HomeButton;
