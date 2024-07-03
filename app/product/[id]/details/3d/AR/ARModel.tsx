'use client'

import Model from "../model"
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from '@react-three/xr';
import Reticle from "./RecticleModel";

export default function ARModel({ objectID }: { objectID: string}) {
  return (
    <>
        <ARButton sessionInit={{
          requiredFeatures: ['hit-test']
        }}/>
        <Canvas>
          <XR>
          <ambientLight intensity={0.4}/>
          <pointLight position={[0, 100, 0]} decay={0}/>
          <pointLight position={[0, -150, 0]} decay={0.2}/>
            <Reticle id={objectID}/>
          </XR>
        </Canvas>
    </>
  )
}
