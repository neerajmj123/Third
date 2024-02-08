import React,{Component} from "react";
class Counter extends Component{
    constructor(props){
        super(props)
        this.state={conunt : this.props.intialvalue}
    }
    increment =()=>{
        this.setState({count : this.state.count + 1})
    }
    render(){
        return(
            <>
            <p>Count : {this.state.conunt}</p>
            <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}
export default Counter