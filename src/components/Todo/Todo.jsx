import { TodoForm } from "components/TodoForm/TodoForm";
import { nanoid } from "nanoid";
import { Component } from "react";



export class ToDo extends Component {
    state = {
        todos:[]

    }
    onSubmit = (value) => {
        const toDo = {value, id: nanoid()}
        this.setState(prevState => ({todos:[...prevState.todos, toDo]}))
    }
    render(){
        return (
            <div>

                <TodoForm onSubmit ={this.onSubmit}/>
                <ul>
                {this.state.todos.map(item => (<li key={item.id}>{item.value}</li>)
                )}
                </ul>
                </div>
        )
    }
}