import React,{ Component} from 'react'
class Form extends Component
{
    constructor(props)
    {  super(props)
         this.state={
             username : '',
             password: ''
         }
         this.inputRef= React.createRef()
    }
    componentDidMount()
    {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
      handelUsernameChange= event=> {
      this.setState({
         username: event.target.value
      })
      }
      handelPasswordChange= event=> {
        this.setState({
           password : event.target.value
        })
        }
        display =()=>
        {
            if(`${this.state.username}`=='')
            alert('Username cannot be empty')
           else if(`${this.state.password}`=='')
            alert('Password cannot be empty')
            else
            alert(`${this.state.username} ${this.state.password}`
            )
        }
    render()
    {
        return (
            <>
          <h1> Login Form </h1>
           < form onSubmit= {this.display}> 
            <div>
           <h2 > UserName : </h2>
             <input type='text' ref ={this.inputRef} value = {this.state.username} onChange={this.handelUsernameChange}/>
             
            </div>
            <div>
            <h2> Password: </h2>
             <input type='password' value = {this.state.password} onChange={this.handelPasswordChange}/>
             </div>
             <div>
             <button type='submit'> Login </button>
             </div>
             </form>
             </>
        ) 
    }
}
export default Form;