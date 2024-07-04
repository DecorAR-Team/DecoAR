'use client';

import { Canvas } from '@react-three/fiber';
import { ARButton, XR } from '@react-three/xr';
import Reticle from './RecticleModel';
import ArrowBack from '@/components/ui/arrow-back';

export default function ARModel({ objectID }: { objectID: string }) {
  return (
    <>
      <ArrowBack className="mt-5" />
      <div>
        <ARButton
          className="!bottom-20"
          sessionInit={{
            requiredFeatures: ['hit-test'],
          }}
        />
      </div>
      <Canvas>
        <XR>
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 100, 0]} decay={0} />
          <pointLight position={[0, -150, 0]} decay={0.2} />
          <Reticle id={objectID} />
        </XR>
      </Canvas>
    </>
  );
}
