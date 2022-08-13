import React from 'react';
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

const Box = (): JSX.Element => {
    const boxRef = React.useRef<THREE.Mesh | null>(null)

    useFrame(({ clock }) => {
        if (boxRef.current) {
            boxRef.current.rotation.x = clock.getElapsedTime()
        }
    })

    return (
        <>
            <mesh ref={boxRef} onClick={() => {
                console.log(1)
            }}>
                <boxBufferGeometry />
                <meshStandardMaterial color="yellow" />
            </mesh>
        </>
    );
};

export default Box;