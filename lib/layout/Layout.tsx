import React, { ReactElement } from 'react';
import { scopedClassMaker } from '../helpers/classes';
import Aside from './Aside';

import './layout.scss';


const sc = scopedClassMaker('emily-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  const children = props.children as Array<ReactElement>;

  const hasAside = 'length' in children && children.reduce((result, node) => result || node.type === Aside, false);
  return (
    <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
export {Layout};
export { default as Header } from './Header';
export { default as Content } from './Content';
export { default as Footer } from './Footer';
export { default as Aside } from './Aside';