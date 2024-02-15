import React,{PureComponent} from "react";

class MyPureComponents extends PureComponent{
    render(){
        console.log("Components re rendering")
        return <div>{this.props.message}</div>
    }
}
export default MyPureComponents