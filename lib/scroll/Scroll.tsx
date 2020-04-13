import * as React from 'react';
import { HTMLAttributes, UIEventHandler, useState, useEffect, useRef } from 'react';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {
  // onPull?: () => void
}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);

  const onScroll: UIEventHandler = (e) => {
    // const scrollHeight = e.currentTarget.scrollHeight;
    // const viewHeight = e.currentTarget.getBoundingClientRect().height;
    // setBarHeight(viewHeight * viewHeight / scrollHeight)

    console.log(e)
    // setBarVisible(true);
    // const { current } = containerRef;
    // const scrollHeight = current!.scrollHeight;
    // const viewHeight = current!.getBoundingClientRect().height;
    // const scrollTop = current!.scrollTop;
    // setBarTop(scrollTop * viewHeight / scrollHeight);
    // if (timerIdRef.current !== null) {
    //   window.clearTimeout(timerIdRef.current!);
    // }
    // timerIdRef.current = window.setTimeout(() => {
    //   setBarVisible(false);
    // }, 300);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { // mounted 的时候算滚动条高度
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    setBarHeight(viewHeight * viewHeight / scrollHeight);
  }, []);

  return (
    <div
      className="emily-scroll"
      {...rest}
    >
      <div className="emily-scroll-inner" style={{right: -scrollbarWidth()}}
        onScroll={onScroll}
        ref={containerRef}
      >
      {children}
      </div>
      <div className="emily-scroll-track">
        <div className="emily-scroll-bar" 
          style={{ height: barHeight }}
          // style={{height: barHeight, transform: `translateY(${barTop}px)`}}
          // onMouseDown={onMouseDownBar}
        />
      </div>
    </div>
  )
}

export default Scroll;
