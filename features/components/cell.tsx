import React, {useEffect, useRef, useState} from 'react';
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";

interface ICell {
  x: number
  y: number
}

const Cell = ({x, y}: ICell): JSX.Element => {
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  const cellRef = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (!cellRef.current) return

    if (hovered) {
      cellRef.current.position.z = Math.min(cellRef.current.position.z += 0.03, 1.2)
    } else {
      cellRef.current.position.z = Math.max(cellRef.current.position.z -= 0.03, 1)
    }
  })

  return (
    <mesh ref={cellRef} position={[x + x * 0.1, y + y * 0.1, 0]} onPointerOver={(evt) => { evt.stopPropagation(); setHovered(true)}}
          onPointerOut={() => setHovered(false)}>
      <boxBufferGeometry args={[1, 1]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
};

export default Cell;