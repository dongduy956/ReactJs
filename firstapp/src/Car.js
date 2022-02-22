import React from 'react';
class Car extends React.Component
{
    constructor(props)
    {
        super(props)
    }
   render(){
        const html=<h1 style={{color:this.props.color}}>Hi, I'm car</h1>
        return html;
    }
}
export default Car;
