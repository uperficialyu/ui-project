// import IconExample1 from './icon.example.1';
import IconExample from './Icon.example';
import React, {Fragment} from 'react';
import Demo from '../../Demo';
// import IconExample2 from './icon.example.2';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./Icon.example.tsx').default}>
        <IconExample/>
      </Demo>
      {/* <Demo code={require('!!raw-loader!./icon.example.2.tsx').default}>
        <IconExample2/>
      </Demo> */}
    </Fragment>
  );
};

export default IconDemo;
