import * as React from 'react';
import { HTMLAttributes } from 'react';
import scrollbarWidth from './scrollbar-width';

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
      <div className="fui-scroll-inner" style={{right: -scrollbarWidth()}}>
      {children}
      </div>
    </div>
  )
}

export default Scroll;
