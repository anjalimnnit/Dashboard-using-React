import React,{ Component} from 'react'
import { Button } from 'antd';

class HeaderClass extends Component
{
    constructor(props)
    {  super(props)
          
    }
     openLogin()
    {  return(
        <div>
        
            </div>
    )
    
      
    }
    render()
    {
        return(
  <div>          
  <img src =" https://logo-logos.com/wp-content/uploads/2016/11/T-Mobile_logo_symbol.png" height="45" width="80" align="left" ></img>           
 <Button type="primary" style={{float:'right'}} onClick={this.openLogin.bind(this)}>Sign In</Button>
 </div>
        )
    }
}
export default HeaderClass;