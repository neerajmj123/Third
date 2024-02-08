import React,{Component} from "react";
class Greeting extends Component{
    render(){
        return<h1>hello ,{props.name}</h1>
    }
}
export default Greeting