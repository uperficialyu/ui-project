import React, { ReactElement } from 'react';
import { scopedClassMaker } from '../helpers/classes';
import './layout.scss';


const sc = scopedClassMaker('emily-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={sc('', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;