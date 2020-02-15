import React from 'react';
import './importIcons'

interface IconProps {
  name: string;
  onClick: React.MouseEventHandler<SVGElement>;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;
