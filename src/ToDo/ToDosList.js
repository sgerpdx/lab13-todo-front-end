import React, { Component } from 'react'
import './ToDos.css'
import { makeToDo, completeToDo, getAllPlans } from '../API-utils.js'


export default class ToDosList extends Component {
    state = {
        plans: [],
        todo: ''
    }


    componentDidMount = async () => {
        const plans = await getAllPlans(this.props.user.token);
        this.setState({ plans: plans });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        makeToDo(this.state.todo, this.props.user.token);
        await this.fetchPlans();
        this.setState({ todo: '' }); //this resets state of input to empty string after Submit
    }



    handleToDoChange = (e) => {
        this.setState({ todo: e.target.value }); ///work on norming this syntax
    }


    handleComplete = async (todoId) => {
        await completeToDo(todoId, this.props.user.token);
        this.fetchToDos();
    }



    completedCheck(done) {
        if (done === true) {
            return 'yes';
        } else {
            return 'no';
        }
    }


    render() {

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

            </div>


        )
    }
}
