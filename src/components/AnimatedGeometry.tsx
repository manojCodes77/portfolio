import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function AnimatedGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Animate torus
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.2;
      torusRef.current.position.x = Math.sin(t * 0.5) * 2;
      torusRef.current.position.y = Math.cos(t * 0.3) * 2;
    }
    
    // Animate sphere
    if (sphereRef.current) {
      sphereRef.current.rotation.z = t * 0.4;
      sphereRef.current.position.x = Math.cos(t * 0.4) * 3;
      sphereRef.current.position.z = Math.sin(t * 0.4) * 3;
    }
    
    // Animate octahedron
    if (octahedronRef.current) {
      octahedronRef.current.rotation.x = t * 0.5;
      octahedronRef.current.rotation.y = t * 0.3;
      octahedronRef.current.position.y = Math.sin(t * 0.6) * 2;
    }
  });
  
  return (
    <group>
      {/* Distorted Torus */}
      <mesh ref={torusRef} position={[2, 0, -3]}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <MeshDistortMaterial
          color="#f72585"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Distorted Sphere */}
      <mesh ref={sphereRef} position={[-2, 1, -2]}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <MeshDistortMaterial
          color="#4cc9f0"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      
      {/* Octahedron */}
      <mesh ref={octahedronRef} position={[0, -1, -1]}>
        <octahedronGeometry args={[0.6, 0]} />
        <MeshDistortMaterial
          color="#7209b7"
          attach="material"
          distort={0.3}
          speed={1}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
}

