import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import Siderclass from './components/Siderclass';
import HeaderClass from './components/HeaderClass';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      
      <Layout>
      <Header style={{color:'pink'}}> 
        <HeaderClass/>
      </Header>
      
      <Layout>
      <Sider>
        <Siderclass align={'left'}/>
      </Sider>
        <Layout>
        <Content style={{ padding: '0 50px', minHeight: 500}}>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      </Layout>
      </Layout>
    </div>
  );
}

export default App;
