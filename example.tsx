import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
// import IconExample from './lib/icon/Icon.example';
import IconDemo from './lib/icon/Icon.demo';

import DialogExample from './lib/dialog/Dialog.example';
import LayoutExample from './lib/layout/Layout.example';
import { Layout, Aside, Header, Content, Footer } from './lib/layout/Layout';
import './example.scss';

const logo = require('./logo.png');


ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo.default} width="48" height="48" alt=""/>
          <span> Emily-ui </span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li><NavLink to="/icon">图标</NavLink></li>
            <li><NavLink to="/button">按钮</NavLink></li>
            <li><NavLink to="/dialog">对话框</NavLink></li>
            <li><NavLink to="/layout">布局</NavLink></li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; Emily
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));