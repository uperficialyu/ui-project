import React, { useState, Fragment } from 'react';
import Dialog from './Dialog';

function fun() {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <Fragment>
      <div>
        <h1>example1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog
          visible={x}
          onClose={() => {setX(false);}}
          buttons = {
            [
              <button onClick={() => {setX(false);}}>1</button>,
              <button onClick={() => {setX(false);}}>2</button>
            ]
          }
        >
          <div>hhelo</div>
        </Dialog>
      </div>

      <div>
        <h1>example2</h1>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog
          visible={y}
          onClose={() => {setY(false);}}
          closeOnClickMask={true}
          buttons = {
            [
              <button onClick={() => {setY(false);}}>1</button>,
              <button onClick={() => {setY(false);}}>2</button>
            ]
          }
        >
          <div>hhelo</div>
        </Dialog>
      </div>
    </Fragment>
  )
}

export default fun;
