import React from 'react';
import ReactDom from 'react-dom';
import Icon from './Icon';
import './aa.scss'

const hello: React.MouseEventHandler<Element> = (e) => {
  console.log('hello');
}

ReactDom.render(
  <div>
    <Icon onClick={hello} name="wechat"/>
    {/* <Icon name="alipay"/>
    <Icon name="qq"/> */}
  </div>,
  document.getElementById('root')
);
