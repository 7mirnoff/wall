import React from 'react'

import { Html, useProgress } from '@react-three/drei'

export const Loader: React.FC = () => {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
