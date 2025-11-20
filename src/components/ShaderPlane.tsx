import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Custom vertex shader
const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    float wave = sin(pos.x * 2.0 + uTime) * 0.1;
    pos.z += wave;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// Custom fragment shader
const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    // Create animated gradient
    float mixValue = sin(vUv.x * 3.0 + uTime * 0.5) * 0.5 + 0.5;
    vec3 color = mix(uColor1, uColor2, mixValue);
    
    // Add some variation
    float wave = sin(vUv.y * 5.0 + uTime) * 0.5 + 0.5;
    color = mix(color, uColor3, wave * 0.3);
    
    // Add glow effect
    float glow = 1.0 - length(vUv - 0.5) * 0.5;
    color *= glow;
    
    gl_FragColor = vec4(color, 0.3);
  }
`;

export function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
    
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });
  
  const uniforms = {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color('#4cc9f0') },
    uColor2: { value: new THREE.Color('#f72585') },
    uColor3: { value: new THREE.Color('#7209b7') },
  };
  
  return (
    <mesh ref={meshRef} position={[0, 0, -5]} rotation={[0, 0, 0]}>
      <planeGeometry args={[15, 15, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

