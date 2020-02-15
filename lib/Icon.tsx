import React from 'react';
import './importIcons'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =
  ({className, name, ...restProps}) => {
    return (
      <svg
           {...restProps}
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
    );
  };

export default Icon;
