import React from 'react';
import Layout from './Layout';
// import Header from './header';
// import Content from './content';
// import Footer from './footer';

const LayoutExample = () => {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{width: 200}} className="hello">
          <div>111</div>
          {/* <Header className="x">header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer> */}
        </Layout>
      </div>
    </div>
  )
};

export default LayoutExample;
