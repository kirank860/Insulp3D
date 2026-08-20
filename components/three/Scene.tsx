"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, Preload } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-background">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <Model />
          </Float>
          <Preload all />
        </Suspense>
      </Canvas>
      {/* Light overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm pointer-events-none transition-all duration-500" />
    </div>
  );
}
