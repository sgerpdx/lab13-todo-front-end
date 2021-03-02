import React, { Component } from 'react'
//import { getTodos } from '../api-utils.js';

export default class ToDosList extends Component {
    // state = {
    //     todos: [], //so that we can map over it
    //     todo: ''
    // }

    // //if no token, redirect:


    // componentDidMount = () => {
    //     const todos = await getTodos(this.props.user.token);

    //     this.setState({ todos: todos });
    //     //validate fetch: logout todos in render() ...or... Network tab
    // }

    // fetchToDos = async () => {
    //     const todos = await getAllToDos(this.props.user.token);

    //     this.setState({ todos });
    // }


    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     createToDo(this.state.tod, this.props.user.token);

    //     await this.fetchToDos();

    //     this.setState({ todo: '' }); //this resets state of input to empty string after Submit

    // }



    // handleToDoChange = (e) => {
    //     this.setState({ todo: e.target.value }); ///work on norming this syntax
    // }


    // handleComplete = () => {
    //     await completeToDo(  , this.props.user.token);

    //     this.fetchToDos();
    // }
    // pass in something as argument in

    render() {
        // console.log(this.props); //this will show user, which is the prop?
        // console.log(this.todos);

        return (


            <div>
                Here is your list of To-Dozzzz
                {/* <div>
                    <input value={this.state.todo} onChange={this.handleTodoChange} />
                    <button>Create a New ToDo</button>
                </div>
                {!this.state.todos.length && <p>No todos for you.</p>}

                {this.state.todos.map(todo =>
                    <p>something{todo.completed}etc</p>
                    //terniary here, re: Dani's code
                )}

                {JSON.stringify(this.props.user)} */}

            </div>
        )
    }
}