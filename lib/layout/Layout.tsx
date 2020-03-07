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
  // let hasAside = false;
  // if(children.length) {
  //   children.map((node) => {
  //     if (node.type === Aside) {
  //       hasAside = true;
  //     }
  //   })
  // }

  const hasAside = 'length' in children && children.reduce((result, node) => result || node.type === Aside, false);
  return (
    // <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
    <div className={sc('', {extra: [className, hasAside && 'hasAside'].join(' ')})} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;