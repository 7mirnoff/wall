import React, { useEffect, useRef, useState } from 'react'

import { useSpring, animated, config } from '@react-spring/three'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
interface IBrick {
  x: number
  y: number
}

type GLTFResult = GLTF & {
  nodes: {
    stone_low_poly_02: THREE.Mesh
  }
  materials: {
    ['stones-blocks']: THREE.MeshStandardMaterial
  }
}

const Brick = ({ x, y }: IBrick): JSX.Element => {
  const { nodes, materials } = useGLTF('/assets/models/stones-blocks.glb') as GLTFResult
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  const { scale } = useSpring({
    scale: active ? 0.55 : 0.45,
    config: config.wobbly
  })

  const BrickGroupRef = useRef<THREE.Group>(null)

  const stone = nodes.stone_low_poly_02
  const material = materials['stones-blocks']
  material.side = THREE.FrontSide

  return (
    <animated.group
      ref={BrickGroupRef}
      position={[x + x * 0.1, y - y * 0.2, 0]}
      scale={scale}
      onClick={(evt) => {
        evt.stopPropagation()
        setActive(!active)
      }}
      onPointerOver={(evt) => {
        evt.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={(evt) => {
        evt.stopPropagation()
        setHovered(false)
      }}
    >
      <mesh castShadow={true} receiveShadow={true} geometry={stone.geometry} material={material} />
    </animated.group>
  )
}

export default Brick
