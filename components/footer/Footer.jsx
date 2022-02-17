import { useContext } from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";
import PortfolioContext from "../../context/context";
import NetworkLink from "../buttons/NetworkButton";
const Footer = () => {
	const {
		footer: { networks },
	} = useContext(PortfolioContext);

	return (
		<section id="footer">
			<Container mb={20} justify="center" align="center">
				<SimpleGrid
					w="full"
					alignItems="center"
					justifyContent="center"
					columns={4}
					spacing={5}
				>
					{networks &&
						networks.map((network) => {
							const { id, name, url } = network;
							return <NetworkLink key={id} name={name} url={url} />;
						})}
				</SimpleGrid>
			</Container>
		</section>
	);
};

export default Footer;
