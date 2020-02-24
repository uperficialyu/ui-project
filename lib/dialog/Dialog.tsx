import React from 'react';

interface props {
  visible: boolean;
}

const Dialog:React.FunctionComponent<props> = (props) => {
  return (
    props.visible ?
    <div>dialog</div> : null
  )
}
 
export default Dialog;
