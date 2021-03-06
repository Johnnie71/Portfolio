import { useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

const ProjectButton = (props) => {
	const bluePink = useColorModeValue("#1367d4", "#FF0080");
	const greenPurple = useColorModeValue("#32d142", "#7928CA");
	const lightBlueLightPink = useColorModeValue("#87c1f5", "#ff70b7");
	const lightGreenLightPurple = useColorModeValue("#87f5be", "#b17de5");

	return (
		<Icon viewBox="0 0 62 67" {...props}>
			<svg xmlns="http://www.w3.org/2000/svg">
				<linearGradient
					id="9"
					x1="43.5"
					x2="43.5"
					y1="23"
					y2="57.33"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor={lightBlueLightPink}></stop>
					<stop offset="1" stopColor={lightGreenLightPurple}></stop>
				</linearGradient>
				<path
					fill="url(#9)"
					d="M47.477 32a4.956 4.956 0 001.023-3 5 5 0 00-10 0c0 1.131.39 2.162 1.023 3H32v8c.83-.63 1.87-1 3-1 2.76 0 5 2.24 5 5s-2.24 5-5 5c-1.13 0-2.17-.37-3-1v7h18.47c2.5 0 4.53-2.03 4.53-4.53V32h-7.523z"
				></path>
				<linearGradient
					id="8"
					x1="32"
					x2="32"
					y1="6.667"
					y2="57.684"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor={bluePink}></stop>
					<stop offset="1" stopColor={greenPurple}></stop>
				</linearGradient>
				<path
					fill="url(#8)"
					d="M51 8H13c-2.757 0-5 2.243-5 5v38c0 2.757 2.243 5 5 5h38c2.757 0 5-2.243 5-5V13c0-2.757-2.243-5-5-5zm-41 5c0-1.654 1.346-3 3-3h18v4.851a5.872 5.872 0 00-2-.351c-1.803 0-3.494.8-4.64 2.195a6.032 6.032 0 00-1.239 5.024c.45 2.267 2.28 4.128 4.554 4.633A5.926 5.926 0 0031 26.149V31h-8.531l1.21 1.603c.537.711.82 1.54.82 2.397 0 1.202-.534 2.33-1.464 3.094-.943.774-2.138 1.067-3.366.823-1.501-.298-2.735-1.514-3.071-3.026a3.956 3.956 0 01.721-3.288L18.531 31H10V13zm21 41H13c-1.654 0-3-1.346-3-3V33h4.85a5.926 5.926 0 00-.203 3.325c.505 2.274 2.367 4.104 4.633 4.554.404.08.809.12 1.21.12a5.994 5.994 0 003.814-1.359A5.983 5.983 0 0026.5 35c0-.688-.119-1.361-.351-2H31v8.531l1.603-1.211a3.956 3.956 0 013.288-.721c1.512.336 2.728 1.57 3.026 3.071.244 1.227-.049 2.422-.823 3.366-1.31 1.594-3.786 1.933-5.491.644L31 45.468V54zm23-3c0 1.654-1.346 3-3 3H33v-4.851a5.868 5.868 0 002 .351c1.803 0 3.494-.8 4.64-2.195a6.032 6.032 0 001.239-5.024c-.45-2.267-2.28-4.128-4.554-4.633a5.926 5.926 0 00-3.325.203V33h8.531l-1.211-1.603a3.956 3.956 0 01-.721-3.288c.336-1.512 1.57-2.728 3.071-3.026 1.229-.246 2.423.048 3.366.823A3.992 3.992 0 0147.5 29c0 .858-.284 1.687-.82 2.397L45.468 33H54v18zm-4.851-20a5.872 5.872 0 00.351-2c0-1.803-.8-3.494-2.195-4.64-1.395-1.145-3.224-1.596-5.024-1.239-2.267.45-4.128 2.28-4.633 4.554A5.926 5.926 0 0037.851 31H33v-8.531l-1.603 1.211a3.952 3.952 0 01-3.288.721c-1.512-.336-2.728-1.57-3.026-3.071-.244-1.227.049-2.422.823-3.366 1.309-1.595 3.783-1.934 5.491-.644L33 18.531V10h18c1.654 0 3 1.346 3 3v18h-4.851z"
				></path>
			</svg>
		</Icon>
	);
};

export default ProjectButton;
