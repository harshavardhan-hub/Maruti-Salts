"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useScroll } from "framer-motion";

function Crystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollY } = useScroll();

  useFrame((state) => {
    if (meshRef.current) {
      const scrollValue = scrollY.get();
      // Combine base rotation with scroll-based rotation
      // 50% slower than scroll speed roughly translates to * 0.005
      meshRef.current.rotation.y = (scrollValue * 0.005) + (state.clock.elapsedTime * 0.1);
      meshRef.current.rotation.x = (scrollValue * 0.002) + (state.clock.elapsedTime * 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#1C1A17"
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={1.5}
          emissive="#6B4E2A"
          emissiveIntensity={0.2}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCrystal() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#6B4E2A" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#F7F4EF" />
      <Crystal />
      <Environment preset="city" />
    </Canvas>
  );
}
