import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import IconExample from './lib/icon/Icon.example';
import DialogExample from './lib/dialog/Dialog.example';
import LayoutExample from './lib/layout/Layout.example';
import { Layout, Aside, Header, Content, Footer } from './lib/layout/Layout';
import './example.scss';

const logo = require('./logo.png');


ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header>
        <div className="logo">
          <img src={logo.default} width="48" height="48" alt=""/>
          <span> Emily-ui </span>
        </div>
      </Header>
      <Layout>
        <Aside>
          <h2>组件</h2>
          <ul>
            <li><Link to="/icon">图标</Link></li>
            <li><Link to="/button">按钮</Link></li>
            <li><Link to="/dialog">对话框</Link></li>
            <li><Link to="/layout">布局</Link></li>
          </ul>
        </Aside>
        <Content>
          <Route path="/icon" component={IconExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; 方应杭
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));