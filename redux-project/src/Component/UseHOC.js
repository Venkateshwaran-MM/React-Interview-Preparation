import React from "react";
import HOComponent from './ExampleHOC';

class UseHOC extends React.Component {

    render(){
        return (
            <h1>{this.props.name}</h1>
        )
    }
}

export default HOComponent(UseHOC)