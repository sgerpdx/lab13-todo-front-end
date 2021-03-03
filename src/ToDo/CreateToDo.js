import React, { Component } from 'react'
import { makeToDo } from '../API-utils.js'

export default class CreateToDo extends Component {
    state = {
        plan: {
            todo: '',
            completed: false,
        }
    }


    handlePlanChange = (e) => {
        this.setState({
            plan: {
                todo: e.target.value,
                completed: false,
            }
        });
    }



    handleSubmit = async (e) => {
        e.preventDefault();
        await makeToDo(this.state.plan, this.props.user.token);
        this.props.history.push('/plans');
    }


    render() {
        console.log(this.state.plan.todo);
        console.log(this.state.plan.completed);


        return (
            <div className="formArea">
                <form className="actualForm" onSubmit={this.handleSubmit}>
                    <label>
                        Plan Description:
                        <input onChange={this.handlePlanChange}></input>
                    </label>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}
