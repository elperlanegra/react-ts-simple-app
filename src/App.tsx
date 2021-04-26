import * as React from 'react';
import TaskForm from "./components/TaskForm";
import { ITask } from "./interface/Task"

export class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    addANewTask(task: ITask) {
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
                        <TaskForm addANewTask={this.addANewTask}/>
                    </div>

                </div>
            </div>
        )
    }
}

interface IProps {
    title: String;
}

interface IState {
    tasks: ITask[];
}
