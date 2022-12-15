import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={1}>
      <MeshDistortMaterial roughness={0} distort={0.5} speed={1.5} color="#ff829a" attach="material"></MeshDistortMaterial>
    </Sphere>
  );
}
