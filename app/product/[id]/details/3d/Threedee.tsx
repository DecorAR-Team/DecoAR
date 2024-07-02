'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Model from './model'

export default function Threedee({id}: {id: string }) {
  return (
    <Canvas camera={{position: [0, 1, 3], fov: 75}}>
      <ambientLight intensity={0.4}/>
      <pointLight position={[0, 100, 0]} decay={0}/>
      <pointLight position={[0, -150, 0]} decay={0.2}/>
      <Model id={id} />
      <OrbitControls />
    </Canvas>
  )
}
