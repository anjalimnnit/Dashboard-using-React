import React from 'react'

const   Hello = props => { 
    const {name}=props
    console.log(props)
    return <h1> Hello {name} </h1>

};
export default Hello ;
