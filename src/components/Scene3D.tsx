import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { AnimatedGeometry } from './AnimatedGeometry';
import { FloatingShapes } from './FloatingShapes';
import { ShaderPlane } from './ShaderPlane';

export function Scene3D() {
  const particlesRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  // Generate particle positions
  const particleCount = 5000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const radius = 15;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Create a galaxy-like distribution
      const angle = Math.random() * Math.PI * 2;
      const radiusOffset = Math.random() * radius;
      const spiralAngle = radiusOffset * 0.3;

      positions[i3] = Math.cos(angle + spiralAngle) * radiusOffset;
      positions[i3 + 1] = (Math.random() - 0.5) * 5;
      positions[i3 + 2] = Math.sin(angle + spiralAngle) * radiusOffset;
    }

    return positions;
  }, []);

  // Animate particles
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;

      // Smoothly return to center when not dragging
      particlesRef.current.position.x = THREE.MathUtils.lerp(
        particlesRef.current.position.x,
        mouse.x * 0.3,
        0.03
      );
      particlesRef.current.position.y = THREE.MathUtils.lerp(
        particlesRef.current.position.y,
        mouse.y * 0.3,
        0.03
      );
    }
  });

  return (
    <>
      {/* Don't set background color - let CSS handle it */}

      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#4cc9f0" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#f72585" />
      <pointLight position={[0, 10, -10]} intensity={1} color="#7209b7" />

      {/* Particle system */}
      <Points ref={particlesRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#4cc9f0"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </Points>

      {/* Animated geometric shapes */}
      <AnimatedGeometry />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Shader plane background */}
      <ShaderPlane />
    </>
  );
}

