import * as React from 'react';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  // onPull?: () => void
}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <div
      className="emily-scroll"
      {...rest}
    >
      {children}
    </div>
  )
}

export default Scroll;
