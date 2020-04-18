import React,{ Component} from 'react'
class Welcome extends Component
{
    constructor()
    {  super()
         this.state={
             count : 0
         }
    }
    increment()
    {
        this.setState({
            count : this.state.count +1
        })
    }
    render()
    {
        return (
            <div>
             <div>Count= {this.state.count}</div>
             <button onClick = { () =>this.increment()}>Increment</button>
             </div>
        ) 
    }
}
export default Welcome;