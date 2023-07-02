import { Canvas } from "@react-three/fiber";
import Game from "./components/Three"
import './index.css'
import { Suspense } from "react";
const App = () => {
  return (
    <Canvas id="canvas-container" 
    >
      <Suspense fallback={null}>
  <Game/>
      </Suspense>
    </Canvas>
  );
};

export default App;
