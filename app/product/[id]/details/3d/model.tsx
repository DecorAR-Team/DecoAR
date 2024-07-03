import React, { useRef, useState, useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
export default function Model({id, position}: {id: string, position: any}) {
    const url = `/assets/${id + ".glb"}`
    const threeObj = useLoader(GLTFLoader, url, (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
        loader.setDRACOLoader(dracoLoader);
    });

    return (
        <primitive position={position} object={threeObj.scene} />
    )
}

