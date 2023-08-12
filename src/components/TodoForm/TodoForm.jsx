import { th } from "date-fns/locale"
import { Component } from "react"


export class TodoForm extends Component {
    state = {
        value: ""
    }
    hendlerInput = (evn) => {
     const {name, value} = evn.target
      this.setState({[name]:value})  
      
    }

    hendlerSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.value)
        this.setState({value: ''})
    }
    render(){
        return (
            <form onSubmit={this.hendlerSubmit}>
                <button type="button">Add to do</button>
                <input value={this.state.value}name="value" placeholder="do it" onChange={this.hendlerInput}/>
            </form>
        )
    }
}