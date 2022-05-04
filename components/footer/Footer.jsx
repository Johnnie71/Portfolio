import { useContext } from "react";
import {
	Container,
	Heading,
	SimpleGrid,
	useColorModeValue,
	useMediaQuery,
} from "@chakra-ui/react";
import PortfolioContext from "../../context/context";
import NetworkLink from "../buttons/NetworkButton";
import Button from "../buttons/ButtonLink";

const Footer = () => {
	const [isMobile] = useMediaQuery("(max-width: 768px)");
	const {
		footer: { networks },
		contact: { email },
	} = useContext(PortfolioContext);

	const emailUrl = `mailto:${email}`;
	return (
		<section id="footer">
			<Container
				mb={isMobile ? "80px" : 0}
				mt={20}
				justify="center"
				align="center"
			>
				<Button url={emailUrl} name="Email" />
				<Heading
					paddingTop={50}
					borderBottomColor={useColorModeValue("#32d142", "#84248c")}
					variant="section-title"
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
