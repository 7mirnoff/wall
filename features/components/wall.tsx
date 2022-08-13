import React from 'react';
import Cell from "./cell";

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
          {
            matrix.map((x, ii) => x.map((y, i )=> {
              return <Cell key={`${ii}${i}`} x={i} y={ii} />
            }))
          }
        </>
    );
};

export default Wall;