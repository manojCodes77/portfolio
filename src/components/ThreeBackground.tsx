import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Scene3D } from './Scene3D';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export function ThreeBackground() {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full" 
      style={{ zIndex: 0, pointerEvents: 'none' }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        dpr={[1, 2]}
        style={{ pointerEvents: 'auto' }}
        eventSource={document.body}
        eventPrefix="client"
      >
        <Suspense fallback={null}>
          <Scene3D />
          <EffectComposer>
            <Bloom
              intensity={1.5}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

