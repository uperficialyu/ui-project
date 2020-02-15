import React from 'react';
import ReactDom from 'react-dom';
import Icon from './Icon';

ReactDom.render(
  <div>
    <Icon name="wechat"/>
    <Icon name="alipay"/>
    <Icon name="qq"/>
  </div>,
  document.getElementById('root')
);
