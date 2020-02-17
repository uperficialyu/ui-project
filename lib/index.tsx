import React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon/Icon';
import './icon/aa.scss'

const hello: React.MouseEventHandler<Element> = (e) => {
  console.log('hello');
}

ReactDom.render(
  <div>
    <Icon className="aa" onClick={hello}
      onMouseEnter={() => console.log('enter')}
      onMouseLeave={() => console.log('leave')}
      onTouchStart={() => console.log('touch')}
      name="wechat"/>
    {/* <Icon name="alipay"/>
    <Icon name="qq"/> */}
  </div>,
  document.getElementById('root')
);
