import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import Model from "../model";
import { useThree } from "@react-three/fiber";

export default function Reticle({id}: {id: string}) {
    const reticleRef = useRef();
    const [arModel, setArModel] = useState([]);

    const { isPresenting } = useXR();

    useThree(({camera}) => {
        if(!isPresenting) {
            camera.position.z = 3
        }
    })

    useHitTest((hitMatrix: Matrix4, hit: XRHitTestResult) => {
        hitMatrix.decompose(reticleRef.current.position, reticleRef.current.quaternion, reticleRef.current.scale);

        reticleRef.current.rotation.set(-Math.PI/2, 0, 0)
      })


    function placeModel(e) {
        let reticlePosition = e.intersection.object.position.clone();
        setArModel([{reticlePosition}]);
    }

    return (
        <>
            <OrbitControls />
            <ambientLight />

            {isPresenting && arModel.map(({reticlePosition}) => {
                return <Model position={reticlePosition} id={id}/>
            })}

            {isPresenting &&<Interactive onSelect={placeModel}>
                <mesh ref={reticleRef} rotation-x={-Math.PI/2}>
                    <ringGeometry args={[0.1, 0.25, 32]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </Interactive>}

            {!isPresenting && <Model position={[0, 0, 0]} id={id}/>}
        </>
    )
}