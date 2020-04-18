import React,{ Component} from 'react'
import { Button } from 'antd';
import Form from './Form';
class HeaderClass extends Component
{
    constructor(props)
    {  super(props)
         
    }
     openLogin()
    {
       console.log('Buton Clicked');
      <div> <Form/> </div>
    }
    render()
    {
        return(
 <Button type="primary" style={{float:'right'}} onClick={this.openLogin}>Sign In</Button>)
    }
}
export default HeaderClass;