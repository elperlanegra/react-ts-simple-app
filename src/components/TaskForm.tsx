import * as React from 'react';
import {ITask} from '../interface/Task'

class TaskForm extends React.Component<ITaskFormProps, any> {

    constructor(props: ITaskFormProps) {
        super(props);
        this.state = {
            title: '',
            description: '',

        }
    }

    // Generando un id a partir del tiempo
    getCurrentTimestamp(): number{
        return new Date().getTime();
    }


    handleNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTask: ITask = {
            id: this.getCurrentTimestamp(),
            title: this.state.title,
            description: this.state.description,
            completed: false
        };
        this.props.addANewTask(newTask);
        this.setState({title: '', description: ''})
    }

    handleInputChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        });
    }

    render() {

        return (
            <div className="card card-body">
                <form onSubmit={e => this.handleNewTask(e)}>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            name="title"
                            onChange={e => this.handleInputChange(e)}
                            className={"form-control"}
                            placeholder={"Task Title"}
                            value={this.state.title}
                        />
                    </div>

                    <div className={"input-group mb-3"}>
                        <textarea
                            name={"description"}
                            onChange={e => this.handleInputChange(e)}
                            className={"form-control"}
                            placeholder={"Task Description"}
                            value={this.state.description}
                        />
                    </div>

                    <button type={"submit"} className={"btn btn-outline-primary w-100"}> Save &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-save-fill" viewBox="0 0 16 16">
                            <path
                                d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v7.793L4.854 6.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8.5 9.293V1.5z"/>
                        </svg>


                    </button>

                </form>
            </div>
        )
    }
}

interface ITaskFormProps {
    addANewTask: (task: ITask) => void;
}

interface ITaskFormState {
    title: string,
    description: string
}

export default TaskForm;
