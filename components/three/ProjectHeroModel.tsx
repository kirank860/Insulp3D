"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Float, Center, Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

const DEFAULT_PROJECT_IMAGES = [
  "/assets/projects/1.png",
  "/assets/projects/2.jpg",
  "/assets/projects/3.jpg",
  "/assets/projects/4.jpg"
];

function ProjectPanel({ url, position, rotation }: { url: string, position: [number, number, number], rotation: [number, number, number] }) {
  const texture = useTexture(url);
  return (
    <group position={position} rotation={rotation}>
      {/* The actual image */}
      <mesh position={[0, 0, 0.02]}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      
      {/* Backplate frame */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[2.1, 2.1]} />
        <meshPhysicalMaterial color="#0d1b2a" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function SplitRevealSphere({ images }: { images: string[] }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  
  const radius = 2.8; 
  const numImages = images.length;

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.2;
      coreRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Center>
        <group ref={groupRef} scale={0.75}>
          
          {/* Inner Engineering Core */}
          <mesh ref={coreRef}>
            <icosahedronGeometry args={[1.2, 1]} />
            <meshPhysicalMaterial 
              color="#0d1b2a"
              metalness={0.9}
              roughness={0.1}
              wireframe={true}
            />
          </mesh>

          {/* Orbiting Project Thumbnails */}
          {images.map((url, i) => {
            const angle = (i / numImages) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const rotationY = -angle + Math.PI / 2;

            return (
              <ProjectPanel 
                key={i} 
                url={url} 
                position={[x, 0, z]} 
                rotation={[0, rotationY, 0]} 
              />
            );
          })}

          {/* Outer Glass Sphere - placed last for correct transparency sorting */}
          <Sphere args={[4.2, 64, 64]}>
            <meshPhysicalMaterial 
              color="#ffffff"
              transmission={1} 
              opacity={1}
              transparent={true}
              roughness={0.0}
              metalness={0.1}
              ior={1.2}
              thickness={1.5}
            />
          </Sphere>

        </group>
      </Center>
    </Float>
  );
}

export default function ProjectHeroModel({ images = DEFAULT_PROJECT_IMAGES }: { images?: string[] }) {
  const [isReady, setIsReady] = useState(false);

  // Filter out any empty/undefined images just in case
  const validImages = images.filter(img => Boolean(img));
  const finalImages = validImages.length > 0 ? validImages : DEFAULT_PROJECT_IMAGES;

  // Delay the heavy WebGL rendering so it doesn't block the page navigation transition
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return <div className="w-full h-full bg-gradient-to-br from-border/20 to-background/20 animate-pulse rounded-3xl border border-border/50" />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas 
        camera={{ position: [0, 0, 11], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
          <directionalLight position={[-10, -10, -10]} intensity={1.5} color="#4a90e2" /> 
          
          <SplitRevealSphere images={finalImages} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={true}
            autoRotateSpeed={0.8}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
      
      {/* Interaction Hint Overlay */}
      <div className="absolute bottom-4 right-4 pointer-events-none">
        <div className="flex items-center gap-2 text-xs font-josefin font-bold tracking-widest text-foreground/50 uppercase">
          <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          Drag to explore
        </div>
      </div>
    </div>
  );
}
