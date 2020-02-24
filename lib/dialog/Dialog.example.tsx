import React, { useState } from 'react';
import Dialog from './Dialog';

function fun() {
  const [x, setX] = useState(false)
  return (
    <div>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog visible={x} >
        <div>hhelo</div>
      </Dialog>
    </div>
  )
}

export default fun;
