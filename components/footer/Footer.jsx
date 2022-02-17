import { useContext } from "react";
import {
	Container,
	Heading,
	SimpleGrid,
	useColorModeValue,
} from "@chakra-ui/react";
import PortfolioContext from "../../context/context";
import NetworkLink from "../buttons/NetworkButton";

const Footer = () => {
	const {
		footer: { networks },
	} = useContext(PortfolioContext);

	return (
		<section id="footer">
			<Container mb={20} justify="center" align="center">
				<Heading
					mb={5}
					w={"80%"}
					borderBottomColor={useColorModeValue("#32d142", "#84248c")}
					borderBottomWidth={2}
					as="h3"
				>
					Social
				</Heading>
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
