import { useContext } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import PortfolioContext from "../../context/context";
import NetworkButton from "../buttons/NetworkButton";

const Footer = () => {
	const {
		footer: { networks },
	} = useContext(PortfolioContext);

	return (
		<section id="footer">
			<Container>
				<Box>
					{networks &&
						networks.map((network) => {
							const { id, name, url } = network;
							<NetworkButton id={id} name={name} url={url} />;
						})}
				</Box>
			</Container>
		</section>
	);
};

export default Footer;
