import { useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

function AboutButton() {
	return (
		<Icon>
			<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
				<linearGradient
					id="a"
					x1="32"
					x2="32"
					y1="5.333"
					y2="59.507"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor="#1a6dff"></stop>
					<stop offset="1" stopColor="#c822ff"></stop>
				</linearGradient>
				<path
					fill="url(#a)"
					d="M58 19.001a12.89 12.89 0 00-3.985-9.366 12.897 12.897 0 00-9.521-3.624c-6.745.256-12.228 5.739-12.484 12.484-.007.169.006.505.006.505H22c-8.822 0-16 7.178-16 16 0 8.667 6.927 15.746 15.535 15.993l5.097 5.927C27.204 57.606 28.067 58 29 58c.933 0 1.796-.394 2.357-1.067l5.107-5.939C45.073 50.746 52 43.667 52 35c0-1.01-.1-2-.287-3H58V19.001zM50 35c0 7.72-6.28 14-14 14h-.459l-5.71 6.641c-.381.457-1.27.47-1.673-.013L22.459 49H22c-7.72 0-14-6.28-14-14s6.28-14 14-14h10.157c.402 3 1.592 5.057 3.477 7.016A12.89 12.89 0 0045 32h4.673c.213 1 .327 1.987.327 3zm6-5H45a10.908 10.908 0 01-7.926-3.372 10.92 10.92 0 01-3.066-8.057c.213-5.611 4.951-10.35 10.562-10.563a10.915 10.915 0 018.058 3.066A10.912 10.912 0 0156 19.001V30z"
				></path>
				<linearGradient
					id="b"
					x1="45"
					x2="45"
					y1="5.333"
					y2="59.507"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor="#1a6dff"></stop>
					<stop offset="1" stopColor="#c822ff"></stop>
				</linearGradient>
				<path fill="url(#b)" d="M45 23a2 2 0 100 4 2 2 0 100-4z"></path>
				<linearGradient
					id="c"
					x1="27"
					x2="27"
					y1="5.333"
					y2="59.507"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor="#1a6dff"></stop>
					<stop offset="1" stopColor="#c822ff"></stop>
				</linearGradient>
				<path fill="url(#c)" d="M24 26h6v2h-6z"></path>
				<linearGradient
					id="d"
					x1="29"
					x2="29"
					y1="5.333"
					y2="59.507"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor="#1a6dff"></stop>
					<stop offset="1" stopColor="#c822ff"></stop>
				</linearGradient>
				<path fill="url(#d)" d="M24 30h10v2H24z"></path>
				<linearGradient
					id="e"
					x1="31"
					x2="31"
					y1="5.333"
					y2="59.507"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor="#1a6dff"></stop>
					<stop offset="1" stopColor="#c822ff"></stop>
				</linearGradient>
				<path fill="url(#e)" d="M24 34h14v2H24z"></path>
				<linearGradient
					id="f"
					x1="29"
					x2="29"
					y1="5.335"
					y2="59.506"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor="#1a6dff"></stop>
					<stop offset="1" stopColor="#c822ff"></stop>
				</linearGradient>
				<path fill="url(#f)" d="M12 38h34v2H12z"></path>
				<linearGradient
					id="g"
					x1="29"
					x2="29"
					y1="5.333"
					y2="59.507"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor="#1a6dff"></stop>
					<stop offset="1" stopColor="#c822ff"></stop>
				</linearGradient>
				<path fill="url(#g)" d="M19 42h20v2H19z"></path>
				<linearGradient
					id="h"
					x1="45"
					x2="45"
					y1="5.333"
					y2="59.507"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor="#1a6dff"></stop>
					<stop offset="1" stopColor="#c822ff"></stop>
				</linearGradient>
				<path
					fill="url(#h)"
					d="M45 12c-2.206 0-4 2-4 4h2c0-1 .897-2 2-2s2 .897 2 2-.897 2-2 2h-1v3h2v-1.126c1-.444 3-2.013 3-3.873A4.004 4.004 0 0045 12z"
				></path>
				<linearGradient
					id="i"
					x1="16"
					x2="16"
					y1="25.834"
					y2="36.835"
					gradientUnits="userSpaceOnUse"
					spreadMethod="reflect"
				>
					<stop offset="0" stopColor="#6dc7ff"></stop>
					<stop offset="1" stopColor="#e6abff"></stop>
				</linearGradient>
				<path fill="url(#i)" d="M20 36h-8v-2a8 8 0 018-8v10z"></path>
			</svg>
		</Icon>
	);
}

export default AboutButton;
