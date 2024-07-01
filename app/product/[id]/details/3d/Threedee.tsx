'use client'

import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements, useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

export default function Threedee({id}: {id: string}) {
  // console.log(id)
  // const threeObj = useLoader(OBJLoader, '3d/assets/armchair.obj')
  return (
    <Canvas>
      <mesh>
        {/* <primitive object={threeObj}/> */}
        <sphereGeometry args={[2, 16, 16]} />
        <meshStandardMaterial color="purple"/>
      </mesh>
    </Canvas>
  )
}

// createRoot(document.getElementById('root')).render(<App />)