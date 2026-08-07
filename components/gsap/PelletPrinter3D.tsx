"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, SpotLight } from "@react-three/drei";
import * as THREE from "three";

const MAX_INSTANCES = 8000;
const PRINT_SPEED = 20; // instances per frame

const PrinterScene = () => {
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null);
  const nozzleRef = useRef<THREE.Group>(null);
  const sparkMaterialRef = useRef<THREE.MeshStandardMaterial>(null);

  // Pre-calculate the positions for the entire print path
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const pathData = useMemo(() => {
    const data = [];
    const height = 12;
    const revolutions = 60; // How many layers
    
    for (let i = 0; i < MAX_INSTANCES; i++) {
      const t = i / MAX_INSTANCES;
      // Angle goes around many times
      const angle = t * Math.PI * 2 * revolutions;
      
      // Twisting vase shape math
      const profile = Math.sin(t * Math.PI); // 0 at bottom, 1 at middle, 0 at top
      const baseRadius = 3 + profile * 2;
      
      // Add a star-like ridged pattern
      const starPattern = Math.sin(angle * (6 / revolutions)) * 0.5; // 6 points
      const currentRadius = baseRadius + starPattern;

      const x = Math.cos(angle) * currentRadius;
      const z = Math.sin(angle) * currentRadius;
      const y = t * height - (height / 2) + 0.2; // center on Y axis, slightly offset from floor

      data.push(new THREE.Vector3(x, y, z));
    }
    return data;
  }, []);

  useEffect(() => {
    if (!instancedMeshRef.current) return;
    
    // Initialize all matrices
    for (let i = 0; i < MAX_INSTANCES; i++) {
      const pos = pathData[i];
      dummy.position.copy(pos);
      
      // Calculate tangent for rotation
      if (i < MAX_INSTANCES - 1) {
        const nextPos = pathData[i + 1];
        dummy.lookAt(nextPos);
      }
      
      const scaleVariation = 0.9 + Math.random() * 0.2;
      dummy.scale.set(0.4 * scaleVariation, 0.4 * scaleVariation, 0.8 * scaleVariation);
      dummy.updateMatrix();
      instancedMeshRef.current.setMatrixAt(i, dummy.matrix);
      instancedMeshRef.current.setColorAt(i, new THREE.Color("#444444"));
    }
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
    if (instancedMeshRef.current.instanceColor) {
      instancedMeshRef.current.instanceColor.needsUpdate = true;
    }
    // Start with 0 drawn
    instancedMeshRef.current.count = 0;
  }, [dummy, pathData]);

  // Animation Loop
  useFrame((state) => {
    if (!instancedMeshRef.current || !nozzleRef.current) return;

    let currentCount = instancedMeshRef.current.count;
    
    // Increment count to simulate printing
    if (currentCount < MAX_INSTANCES) {
      currentCount += PRINT_SPEED;
      if (currentCount > MAX_INSTANCES) currentCount = MAX_INSTANCES;
      instancedMeshRef.current.count = currentCount;
    } else {
      // Reset loop!
      instancedMeshRef.current.count = 0;
      currentCount = 0;
    }

    // Move nozzle to the latest position
    if (currentCount > 0) {
      const targetPos = pathData[currentCount - 1];
      // Smoothly interpolate nozzle position
      nozzleRef.current.position.lerp(
        new THREE.Vector3(targetPos.x, targetPos.y + 0.8, targetPos.z), // Offset nozzle slightly above
        0.5
      );
      
      // Make the nozzle look towards the center but tilted down
      nozzleRef.current.lookAt(targetPos.x, targetPos.y, targetPos.z);
      
      // Pulse the spark material based on time
      if (sparkMaterialRef.current) {
        const pulse = (Math.sin(state.clock.elapsedTime * 10) + 1) / 2; // 0 to 1
        sparkMaterialRef.current.emissiveIntensity = 2 + pulse * 2; // Glows between 2 and 4
      }
    }
    
    // Slowly rotate the entire scene for a turntable effect
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 20;
    state.camera.position.z = Math.cos(state.clock.elapsedTime * 0.1) * 20;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.2} />
      <SpotLight
        position={[10, 20, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        color="#ffffff"
      />
      <SpotLight
        position={[-10, 10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#4f46e5" // subtle blue rim light
      />

      {/* The 3D Printed Object (Instanced) */}
      <instancedMesh ref={instancedMeshRef} args={[undefined, undefined, MAX_INSTANCES]} castShadow receiveShadow>
        <capsuleGeometry args={[0.1, 0.2, 4, 8]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          roughness={0.7} 
          metalness={0.3} 
        />
      </instancedMesh>

      {/* The Extruder Nozzle */}
      <group ref={nozzleRef}>
        {/* Nozzle Body */}
        <mesh castShadow>
          <cylinderGeometry args={[0.3, 0.1, 1, 16]} />
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Glowing Tip / Spark */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            ref={sparkMaterialRef}
            color="#ff5500" 
            emissive="#ff5500" 
            emissiveIntensity={3}
            toneMapped={false} // Crucial for bloom!
          />
        </mesh>
      </group>

      {/* Build Plate */}
      <mesh position={[0, -6.1, 0]} receiveShadow>
        <cylinderGeometry args={[8, 8.5, 0.2, 64]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Grid Helper on plate */}
      <gridHelper args={[14, 28, "#333", "#222"]} position={[0, -5.99, 0]} />

      {/* Contact Shadows for realism */}
      <ContactShadows position={[0, -6, 0]} opacity={0.7} scale={20} blur={2} far={10} />
      
      {/* Environment reflections */}
      <Environment preset="city" />
    </>
  );
};

export function PelletPrinter3D() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] rounded-[2rem] overflow-hidden bg-[#050505] relative border border-white/10 cursor-move shadow-2xl">
      {/* Overlay UI to make it look like a software interface */}
      <div className="absolute top-6 left-6 z-10 font-josefin text-xs tracking-widest text-white/50 uppercase flex flex-col gap-2">
        <span>Status: <span className="text-emerald-400">Extruding</span></span>
        <span>Material: <span className="text-white">Carbon-Resin Blend</span></span>
        <span>Temp: <span className="text-orange-400">235°C</span></span>
      </div>
      <div className="absolute bottom-6 right-6 z-10 font-josefin text-xs tracking-widest text-white/30 uppercase flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white/30 animate-pulse"></span>
        Interactive View
      </div>

      <Canvas shadows camera={{ position: [15, 10, 15], fov: 45 }}>
        <React.Suspense fallback={null}>
          <PrinterScene />
          <OrbitControls 
            enablePan={false} 
            enableZoom={true} 
            minDistance={10} 
            maxDistance={30}
            maxPolarAngle={Math.PI / 2 - 0.1} // don't go below floor
          />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
