import React, { useRef } from "react";
import { useGLTF, Center, Text3D, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import AnimatedSphere from "../AnimatedSphere";
import Love from "../Love/ModelDraco.js";
import Jar from "../Jar/Model2Draco.js";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/Model.gltf");
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.y += 0.001));
  return (
    <PerspectiveCamera position={[0, 0, -1]}>
      <Center>
        <Text3D position={[0.95, 0, 0]} curveSegments={20} height={0.5} lineHeight={0.5} letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
          {window.location.pathname === "/" ? `Xena` : window.location.pathname.split("/")}
          <meshStandardMaterial color={"#ffd1b0"}></meshStandardMaterial>
        </Text3D>
        <Center top left position={[3.25, -2.5, 0]}>
          <group {...props} dispose={null} ref={ref}>
            <group rotation={[-Math.PI / 2.5, 0, 0]}>
              <group rotation={[Math.PI / 1.5, 0, 0]} scale={0.01}>
                <group rotation={[-Math.PI / 1.5, 0, 0]} scale={100}>
                  <mesh geometry={nodes.Flower_Material_0.geometry} material={materials.Material} />
                  <mesh geometry={nodes.Flower_Material_0_1.geometry} material={materials.Material} />
                  <mesh geometry={nodes.Flower_Material_0_2.geometry} material={materials.Material} />
                  <mesh geometry={nodes.Flower_Material_0_3.geometry} material={materials.Material} />
                  <mesh geometry={nodes.Flower_Material_0_4.geometry} material={materials.Material} />
                  <mesh geometry={nodes.Flower_Material_0_5.geometry} material={materials.Material} />
                  <mesh geometry={nodes.Flower_Material_0_6.geometry} material={materials.Material} />
                  <mesh geometry={nodes.Flower_Material_0_7.geometry} material={materials.Material} />
                  <mesh geometry={nodes.Flower_Material_0_8.geometry} material={materials.Material} />
                  <mesh geometry={nodes.Flower_Material_0_9.geometry} material={materials.Material} />
                </group>
              </group>
            </group>
          </group>
        </Center>
      </Center>
      <Center position={[3.5, 5, -7]}>
        <AnimatedSphere></AnimatedSphere>
      </Center>
      <Center position={[-3.5, -5, -7]}>
        <AnimatedSphere></AnimatedSphere>
      </Center>
      <Center position={[0, -10, -20]}>
        <Jar></Jar>
      </Center>
      <Center position={[3.5, -3.5, -7]}>
        <Love></Love>
      </Center>
      <Center position={[-5.5, -0.5, -4]}>
        <Love></Love>
      </Center>
      <Center position={[-3, 4.5, -6]}>
        <Jar></Jar>
      </Center>
      <Center position={[5.5, -0.5, -4]}>
        <Jar></Jar>
      </Center>
    </PerspectiveCamera>
  );
}

useGLTF.preload("/Model.gltf");
