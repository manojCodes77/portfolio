import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create random shapes
  const shapes = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      scale: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.5 + 0.2,
      rotationSpeed: Math.random() * 0.02,
      geometry: Math.floor(Math.random() * 3),
      color: ['#4361ee', '#f72585', '#4cc9f0', '#7209b7'][Math.floor(Math.random() * 4)],
    }));
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const shape = shapes[i];
        child.rotation.x += shape.rotationSpeed;
        child.rotation.y += shape.rotationSpeed * 0.7;
        child.position.y += Math.sin(state.clock.elapsedTime * shape.speed + i) * 0.01;
      });
    }
  });
  
  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position} scale={shape.scale}>
          {shape.geometry === 0 && <boxGeometry />}
          {shape.geometry === 1 && <tetrahedronGeometry />}
          {shape.geometry === 2 && <icosahedronGeometry />}
          <meshStandardMaterial
            color={shape.color}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.6}
            emissive={shape.color}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

