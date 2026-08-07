"use client";

import { useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Model() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!meshRef.current || !materialRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scrubbing
        }
      });

      // Animate rotation and scale across the entire page scroll
      tl.to(meshRef.current!.rotation, {
        y: Math.PI * 2,
        x: Math.PI / 2,
        ease: "none"
      }, 0)
      .to(meshRef.current!.position, {
        z: 2,
        y: -1,
        ease: "power1.inOut"
      }, 0)
      .to(materialRef.current!.color, {
        r: 0.05, g: 0.1, b: 0.16, // Darker blue (#0d1b2a approx)
        ease: "power2.inOut"
      }, 0.5);
    });

    return () => ctx.revert();
  }, []);

  // Subtle continuous rotation independent of scroll
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Reduced geometry segments for massive mobile performance boost without losing visual quality */}
      <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
      <meshPhysicalMaterial 
        ref={materialRef}
        color="#0d1b2a"
        metalness={0.7}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
        wireframe={false}
      />
    </mesh>
  );
}
