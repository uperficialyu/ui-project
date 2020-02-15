import React from 'react';
import './importIcons'
import wechart from './icons/wechat.svg';

console.log(wechart)

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </span>
  );
};

export default Icon;
