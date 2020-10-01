                  import React from 'react';
                  import '../sass/login_style.scss'
                
                  class LoginBox extends React.Component {
                      
                          constructor(props) {
                            let loggedIn=false
                            super(props);
                            this.state = {
                              username:'',
                              password:'',
                              loggedIn:'',
                              errormsg:''           
                              };
                            
                            this.onChange=this.onChange.bind(this)
                          }
                        onChange(e)
                        {
                          this.setState({
                            [e.target.name] : e.target.value
                          })

                        }
                          submitLogin(e) {
                            e.preventDefault()
                            this.setState({
                              loggedIn:true
                            })    
                        }
                            
                        
                    
                          render() {
                            if(this.state.loggedIn)
                            this.props.history.push('/dashboard');
                            return (
                              
                            <div className="root-container" >
                            <div className="box-container">
                              <div className="inner-container">
                      
                            <div className="user" align='center'>
                            <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"  style={{width: 100, height: 100}}   className="photo" />
                                </div>
                  
                                <br/><br/>
                                <div className="box">
                              
                                  <div className="input-group">
                                    
                                    <label htmlFor="username">Username</label>
                                    <input
                                      type="text"
                                      name="username"
                                      className="login-input"
                                      placeholder="Username" 
                                      onChange={this.onChange}/>
                                  
    
                                  </div>
                        
                                  <div className="input-group">
                                    <label htmlFor="password" type='bold'>Password</label>
                                    <input
                                      type="password"
                                      name="password"
                                      className="login-input"
                                      placeholder="Password"
                                      onChange={this.onChange}/>
                                      <br/>
                                      { this.state.errorMessage &&
                                <small className="danger-error"> { this.state.errorMessage } </small> }
                                  </div>
                                  
                                  <button
                                    type="button" style={{backgroundColor:"#a03780"}}
                                    className="login-btn" 
                                    onClick={this
                                    .submitLogin
                                    .bind(this)}>Login</button>
                              
                                </div>
                              </div>
                              </div>
                              </div>
                            
                            
                            );
                          }
                        }    
                      
          
              export default LoginBox