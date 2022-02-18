import { Container } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";

const CanvasContainer = () => {
	return (
		<Container mt={4} h={400} bgColor="red">
			<Canvas className="canvas">
				<ambientLight intensity={0.5} />
				<Box />
			</Canvas>
		</Container>
	);
};

export default CanvasContainer;
