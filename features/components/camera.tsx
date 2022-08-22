import React from 'react'

import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { MOUSE, Vector3 } from 'three'

const minPan = new Vector3(-2, -2, -2)
const maxPan = new Vector3(2, 2, 2)
const _vector = new Vector3()

const Camera = (): JSX.Element => {
  const { camera } = useThree()

  return (
    <OrbitControls
      enableZoom={false}
      mouseButtons={{ LEFT: MOUSE.PAN, RIGHT: MOUSE.MIDDLE, MIDDLE: MOUSE.MIDDLE }}
      onChange={(event) => {
        const controls = event?.target

        _vector.copy(controls.target)
        controls.target.clamp(minPan, maxPan)
        _vector.sub(controls.target)
        camera.position.sub(_vector)
      }}
    />
  )
}

export default Camera
