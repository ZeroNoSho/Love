import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Flower from "./components/Flower/Model.js";

export default function App() {
  return (
    <div>
      <Canvas className="canvas">
        <OrbitControls></OrbitControls>
        <ambientLight intensity={0.5}></ambientLight>
        <directionalLight position={[-2, 5, 2]} intensity={1}></directionalLight>
        <Suspense fallback={null}>
          <Flower></Flower>
        </Suspense>
      </Canvas>
    </div>
  );
}
