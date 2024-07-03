import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest, useXR, XRInteractionHandler } from "@react-three/xr";
import { RefObject, useRef, useState } from "react";
import Model from "../model";
import { useThree } from "@react-three/fiber";
import { Matrix4 } from "three";
import * as THREE from "three";

export default function Reticle({id}: {id: string}) {
    const reticleRef = useRef<THREE.Object3D | undefined>();
    const [arModel, setArModel] = useState<{ reticlePosition: number; UID: number; }[]>([]);

    const { isPresenting } = useXR();

    useThree(({camera}) => {
        if(!isPresenting) {
            camera.position.z = 3
        }
    })

    useHitTest((hitMatrix: Matrix4, hit: XRHitTestResult) => {
        hitMatrix.decompose(reticleRef.current!.position, reticleRef.current!.quaternion, reticleRef.current!.scale);

        reticleRef.current!.rotation.set(-Math.PI/2, 0, 0)
      })


    function placeModel(e: any) {
        let reticlePosition = e.intersection.object.position.clone();
        let UID = Date.now()
        setArModel([{reticlePosition, UID}]);
    }

    return (
        <>
            <OrbitControls />
            <ambientLight />

            {isPresenting && arModel.map(({reticlePosition, UID}) => {
                return <Model key={UID} position={reticlePosition} id={id}/>
            })}

            {isPresenting &&<Interactive onSelect={placeModel}>
                <mesh ref={reticleRef as RefObject<any>} rotation-x={-Math.PI/2}>
                    <ringGeometry args={[0.1, 0.25, 32]} />
                    <meshStandardMaterial color="white" />
                </mesh>
            </Interactive>}

            {!isPresenting && <Model position={[0, 0, 0]} id={id}/>}
        </>
    )
}