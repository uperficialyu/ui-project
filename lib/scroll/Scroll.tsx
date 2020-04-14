import * as React from 'react';
import { HTMLAttributes, UIEventHandler, useState, useEffect, useRef, MouseEventHandler } from 'react';
import scrollbarWidth from './scrollbar-width';

interface Props extends HTMLAttributes<HTMLDivElement> {
  // onPull?: () => void
}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const firstYRef = useRef(0);
  const firstBarTopRef = useRef(0);

  const setBarTop = (number: number) =>{
    if (number < 0) {
      return;
    }
    const { current } = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
    if (number > maxBarTop) {
      return;
    }
    _setBarTop(number);
  };

  const onScroll: UIEventHandler = (e) => {
    // setBarVisible(true);
    const { current } = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    setBarTop(scrollTop * viewHeight / scrollHeight);
    // if (timerIdRef.current !== null) {
    //   window.clearTimeout(timerIdRef.current!);
    // }
    // timerIdRef.current = window.setTimeout(() => {
    //   setBarVisible(false);
    // }, 300);
  };

  useEffect(() => { // mounted 的时候算滚动条高度
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    setBarHeight(viewHeight * viewHeight / scrollHeight);
  }, []);

  const onMouseDownBar: MouseEventHandler = (e: any) => {
    draggingRef.current = true;
    firstYRef.current = e.clientY;
    firstBarTopRef.current = barTop;
  };

  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - firstYRef.current;
      const newBarTop = firstBarTopRef.current + delta;
      setBarTop(newBarTop);
      // const scrollHeight = containerRef.current!.scrollHeight;
      // const viewHeight = containerRef.current!.getBoundingClientRect().height;
      // containerRef.current!.scrollTop = newBarTop * scrollHeight / viewHeight;
    }
  };

  const onMouseUpBar = () =>{
    draggingRef.current = false;
  }

  useEffect(() => {
    document.addEventListener('mouseup', onMouseUpBar);
    document.addEventListener('mousemove', onMouseMoveBar);
    return () => {
      document.removeEventListener('mouseup', onMouseUpBar);
      document.removeEventListener('mousemove', onMouseMoveBar);
    };
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
          // style={{ height: barHeight }}
          style={{height: barHeight, transform: `translateY(${barTop}px)`}}
          onMouseDown={onMouseDownBar}
        />
      </div>
    </div>
  )
}

export default Scroll;
