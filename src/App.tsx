import * as React from 'react';
import TaskForm from "./components/TaskForm";

import {ITask} from "./interface/Task";

export class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    addNewTask(task: ITask) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    render() {
        return (
            <div className="container pt-4">

                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">{this.props.title}</a>
                </nav>

                <div className={"row"}>
                    <div className="col-md-4">
                        <TaskForm addTask={this.addNewTask}/>
                    </div>
                </div>

            </div>
        )
    }
}

interface IPTask {
  name: String;
}

interface IState {
    tasks: ITask[];
}
