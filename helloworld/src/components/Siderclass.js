import React from 'react';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
class Siderclass extends React.Component
{
    constructor(props)
    {  super(props)
         
    }
    render()
    {
      return(
<div>
        
        <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
            <Menu.Item >
                Contact Us
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          
      </div> )
    }
}
export default Siderclass;