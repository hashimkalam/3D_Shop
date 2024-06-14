import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

import { useSnapshot } from "valtio";
import state from "../store";

const CanvasModel = () => {
  const snap = useSnapshot(state);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }} // adjust camera position to adjust shirt size
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        {!snap.intro && <Backdrop />}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
