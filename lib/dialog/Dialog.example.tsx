import React, { useState, Fragment } from 'react';
import Dialog, { alert, confirm, modal } from './Dialog';

function fun() {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);

  const openModal = () => {
    const close = modal(<h1>你好
      <button onClick={() => close()}>close</button>
    </h1>);
  };
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

      <div>
        <h1>example 3</h1>
        <button onClick={() => alert('1')}>alert</button>
        <button onClick={() => confirm('1', () => {
          console.log('你点击了yes');
        }, () => {
          console.log('你点击了no');
        })}>confirm
        </button>
      </div>

      <div>
        <h1>example 4</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </Fragment>
  )
}

export default fun;
