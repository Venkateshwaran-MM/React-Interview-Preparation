import React from "react";

const HOComponent = (OriginalComponent) =>{

    class NewComponent extends React.Component {

        // Logic here
        render(){
            return <OriginalComponent name="My Web Page" />
        }
    }
    return NewComponent;
}
export default HOComponent;
