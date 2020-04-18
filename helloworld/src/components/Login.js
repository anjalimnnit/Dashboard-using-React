import React,{ Component} from 'react'
import ReactDOM from 'react-dom';
class Login extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoginOpen: true,
        isRegisterOpen: false
      };
    }
  
    render() {
  
      return (
        <div className="root-container">
   
        </div>
      );
    }
  }
  ReactDOM.render(
    <Login/>, document.getElementById("root"));
    export default Login;