/* eslint-disable */
"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, SpotLight } from "@react-three/drei";
import * as THREE from "three";

const PARTICLE_COUNT = 20000;

const PrinterScene = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  const [originalPositions, colors] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    
    const color1 = new THREE.Color("#ffaa55"); // Gold/Orange
    const color2 = new THREE.Color("#4f46e5"); // Indigo/Blue
    const color3 = new THREE.Color("#ffffff"); // White
    
    for(let i=0; i<PARTICLE_COUNT; i++) {
       // Random initial positions in a large sphere
       const radius = 18 * Math.cbrt(Math.random()); // Evenly distributed in sphere
       const theta = Math.random() * 2 * Math.PI;
       const phi = Math.acos(2 * Math.random() - 1);
       
       pos[i*3] = radius * Math.sin(phi) * Math.cos(theta);
       pos[i*3+1] = radius * Math.sin(phi) * Math.sin(theta);
       pos[i*3+2] = radius * Math.cos(phi);
       
       // Assign colors randomly
       const mix = Math.random();
       const c = mix < 0.4 ? color1 : mix < 0.8 ? color2 : color3;
       col[i*3] = c.r;
       col[i*3+1] = c.g;
       col[i*3+2] = c.b;
    }
    return [pos, col];
  }, []);

  // Track scroll position
  const scrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (!pointsRef.current || !groupRef.current) return;
    const time = state.clock.elapsedTime;
    const scroll = scrollY.current;
    
    // Scroll now rotates and shifts the entire galaxy much more slowly
    groupRef.current.rotation.y = scroll * 0.001;
    groupRef.current.position.y = scroll * 0.002;
    
    // Significantly slower base time
    const slowTime = time * 0.05;
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for(let i=0; i<PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const ox = originalPositions[i3];
      const oy = originalPositions[i3+1];
      const oz = originalPositions[i3+2];
      
      // Slower wobble
      const noiseX = Math.sin(oy * 0.2 + slowTime) * 1.5;
      const noiseY = Math.cos(oz * 0.2 + slowTime * 0.8) * 1.5;
      const noiseZ = Math.sin(ox * 0.2 + slowTime * 1.2) * 1.5;
      
      // Slower orbit
      const radius = Math.sqrt(ox*ox + oz*oz);
      const angle = Math.atan2(oz, ox) + slowTime * (0.5 / (radius + 0.5));
      
      positions[i3] = Math.cos(angle) * radius + noiseX;
      positions[i3+1] = oy + noiseY;
      positions[i3+2] = Math.sin(angle) * radius + noiseZ;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[4, 0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={originalPositions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={PARTICLE_COUNT} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial 
          size={0.06} 
          vertexColors 
          transparent 
          opacity={0.8} 
          sizeAttenuation={true} 
          blending={THREE.AdditiveBlending} 
          depthWrite={false} 
        />
      </points>
      
      {/* Subtle floor reflection/shadow base */}
      <mesh position={[0, -6.1, 0]}>
        <cylinderGeometry args={[8, 8.5, 0.2, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.02} />
      </mesh>
    </group>
  );
};

export function PelletPrinter3D() {
  return (
    <div className="w-full h-full relative cursor-default">
      <Canvas shadows camera={{ position: [15, 10, 15], fov: 45 }}>
        <React.Suspense fallback={null}>
          <PrinterScene />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
