import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import IconExample from './lib/icon/Icon.example';
import DialogExample from './lib/dialog/Dialog.example';
import LayoutExample from './lib/layout/Layout.example';

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          Emily-ui
        </div>

      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li><Link to="/icon">图标</Link></li>
            <li><Link to="/button">按钮</Link></li>
            <li><Link to="/dialog">对话框</Link></li>
            <li><Link to="/layout">布局</Link></li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
        </main>
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));