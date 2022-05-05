import { Icon } from "@chakra-ui/icons";

const HomeButton = (props) => (
	<Icon viewBox="0 0 512 512" {...props}>
		<g>
			<defs>
				<linearGradient
					id="a"
					gradientUnits="userSpaceOnUse"
					x1="129"
					y1="111.754"
					x2="129"
					y2="135.052"
					gradientTransform="scale(.3721)"
				>
					<stop offset="0" style="stop-color:#ff70b7;stop-opacity:1" />
					<stop offset="1" style="stop-color:#b17de5;stop-opacity:1" />
				</linearGradient>
				<linearGradient
					id="b"
					gradientUnits="userSpaceOnUse"
					x1="69.875"
					y1="31.801"
					x2="69.875"
					y2="140.207"
					gradientTransform="scale(.3721)"
				>
					<stop offset="0" style="stop-color:#ff0080;stop-opacity:1" />
					<stop offset="1" style="stop-color:#7928ca;stop-opacity:1" />
				</linearGradient>
				<linearGradient
					id="c"
					gradientUnits="userSpaceOnUse"
					x1="67.188"
					y1="31.801"
					x2="67.188"
					y2="140.207"
					gradientTransform="scale(.3721)"
				>
					<stop offset="0" style="stop-color:#ff0080;stop-opacity:1" />
					<stop offset="1" style="stop-color:#7928ca;stop-opacity:1" />
				</linearGradient>
				<linearGradient
					id="d"
					gradientUnits="userSpaceOnUse"
					x1="86"
					y1="31.801"
					x2="86"
					y2="140.207"
					gradientTransform="scale(.3721)"
				>
					<stop offset="0" style="stop-color:#ff0080;stop-opacity:1" />
					<stop offset="1" style="stop-color:#7928ca;stop-opacity:1" />
				</linearGradient>
			</defs>
			<path
				style="stroke:none;fill-rule:nonzero;fill:url(#a)"
				d="M50 42h-4c-.55 0-1 .45-1 1v7h6v-7c0-.55-.45-1-1-1Zm0 0"
			/>
			<path
				style="stroke:none;fill-rule:nonzero;fill:url(#b)"
				d="M25 41h2v4h-2Zm0 0"
			/>
			<path
				style="stroke:none;fill-rule:nonzero;fill:url(#c)"
				d="M19 30h12v2H19Zm0 0"
			/>
			<path
				style="stroke:none;fill-rule:nonzero;fill:url(#d)"
				d="M56 32v-2c0-1.102-.898-2-2-2H42v-2c1.102 0 2-.898 2-2v-2c0-1.102-.898-2-2-2h-.383l-3.445-6.895A1.997 1.997 0 0 0 36.382 12H13.618c-.762 0-1.445.426-1.789 1.105L8.383 20H8c-1.102 0-2 .898-2 2v2c0 1.102.898 2 2 2v24c0 1.102.898 2 2 2h44c1.102 0 2-.898 2-2V38c1.102 0 2-.898 2-2v-2c0-1.102-.898-2-2-2Zm-2-2v2H42v-2ZM13.617 14h22.766l3 6H10.617ZM8 22h34v2H8Zm32 4v16h-4v2h4v2h-9v-9c0-1.652-1.348-3-3-3h-6c-1.652 0-3 1.348-3 3v9h-9v-2h4v-2h-4V26ZM10 50v-2h9v2Zm11 0V37c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v13Zm10 0v-2h9v2Zm23 0H42V38h12Zm2-14H42v-2h14Zm0 0"
			/>
		</g>
	</Icon>
);

export default HomeButton;
