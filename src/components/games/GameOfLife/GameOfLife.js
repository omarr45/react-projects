import { useCallback, useRef, useState } from 'react';

import { Helmet } from 'react-helmet';
import produce from 'immer';

const numRows = 40;
const numCols = Math.trunc(window.innerWidth / 30);

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const GameOfLife = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 200);
  }, []);

  return (
    <div className='GameOfLife' id='GameOfLife'>
      <Helmet>
        <title> Game Of Life </title>
        <meta name='title' content='Game Of Life' />
        <meta
          name='description'
          content="Conway's Game Of Life - made with React JS"
        />
      </Helmet>
      <h1 className='ttl'>Conway's Game Of Life</h1>

      <div className='portrait-render'>
        <p>Consider exploring this page in landscape mode for a square grid</p>
      </div>

      <div className='buttons-container'>
        <button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button
          onClick={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(numCols), () => (Math.random() > 0.8 ? 1 : 0))
              );
            }
            setGrid(rows);
          }}>
          Randomize
        </button>
        <button
          onClick={() => {
            setGrid(generateEmptyGrid());
            setRunning(false);
          }}>
          Clear
        </button>
      </div>
      <div
        className='grid-container'
        style={{
          margin: '0 auto',
          width: 'fit-content',
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}>
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = gridCopy[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? 'slateblue' : 'white',
                border: 'solid 1px black',
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameOfLife;
