import React, { Component } from 'react'
import './ToDos.css';
//import { getAllPlans } from '../API-utils';
//import { getTodos } from '../api-utils.js';
import request from 'superagent';

const URL = 'http://localhost:3000'; //this is the API URL

const fetchPlans = async () => {
    const response = await request.get(`${URL}/plans`);
    return response.body;
}

export default class ToDosList extends Component {
    state = {
        plans: [], //so that we can map over it
        plan: ''
    }

    //if no token, redirect:




    componentDidMount = async () => {
        const plans = await fetchPlans();
        this.setState({ plans: plans });
    }






    // componentDidMount = async () => {
    //     const plans = await getAllPlans();
    //     //const plans = fetchPlans();
    //     //const plans = await fetchPlans(this.props.user.token);

    //     this.setState({ plans: plans });
    //     //validate fetch: logout todos in render() ...or... Network tab
    // }

    // fetchPlans = async () => {
    //     await getAllPlans();
    //     //const plans = await getAllPlans(this.props.user.token);
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

    completedCheck(done) {
        if (done === true) {
            return 'yes';
        } else {
            return 'no';
        }
    }


    render() {
        // console.log(this.props); //this will show user, which is the prop?
        // console.log(this.todos);

        return (


            <div>
                Here is your list of To-Dozzzz
                <div className="planArea">
                    {this.state.plans.map(plan =>
                        <div className="planUnit" key={plan.id}>
                            <p>to do:{plan.todo}</p>
                            <p>done? {this.completedCheck(plan.completed)}</p>
                        </div>
                    )}
                </div>

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