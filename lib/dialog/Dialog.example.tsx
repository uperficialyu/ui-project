import React, { useState } from 'react';
import Dialog from './Dialog';

function fun() {
  const [x, setX] = useState(false)
  return (
    <div>
      <button onClick={() => setX(!x)}></button>
      <Dialog visible={x} />
    </div>
  )
}

export default fun;
