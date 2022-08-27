import React from 'react'

import Brick from './brick'

const matrix = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8]
]

const Wall = (): JSX.Element => {
  return (
    <>
      {matrix.map((x, ii) =>
        x.map((y, i) => {
          return <Brick key={`${ii}${i}`} x={i} y={ii} />
        })
      )}
    </>
  )
}

export default Wall
