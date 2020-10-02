import React,{ Component} from 'react'
import { Layout } from 'antd';
import Siderclass from '../components/Siderclass';
import HeaderClass from '../components/HeaderClass';
const { Header, Footer, Sider, Content } = Layout;

class Dashboard extends Component
{
    constructor(props)
    {  super(props)
          
    }
      
    render()
    {
        return(
            <div >
    
      <Layout>
      <Header> 
        <HeaderClass/>
      </Header>
      
      <Layout>
      <Sider>
        <Siderclass align={'left'}/>
      </Sider>
        <Layout>
        <Content style={{ padding: '0 50px', minHeight: 700}}></Content>
        <Footer></Footer>
      </Layout>
      </Layout>
      </Layout>
          </div>
        )
    }
}
export default Dashboard;





