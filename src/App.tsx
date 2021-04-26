import * as React from 'react';
import TaskForm from "./components/TaskForm";
import { ITask } from "./interface/Task"
import TaskList from "./components/TaskList";

export class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            tasks: []
        };
        this.addANewTask = this.addANewTask.bind(this);
    }

    public addANewTask(task: ITask): void {
        this.setState({
            tasks: [...this.state.tasks, task]
        } )
    }

    deleteATask(id: number) {
        const tasks: ITask[] = this.state.tasks.filter(
            (task: ITask) => task.id !== id
        )
        this.setState({tasks})
    }

    public render(): JSX.Element {
        return (
            <div className="container pt-4">

                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">{this.props.title}</a>
                </nav>

                <div className={"row"}>
                    <div className="col-md-4">
                        <TaskForm addANewTask={this.addANewTask.bind(this)}/>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <TaskList
                                tasks={this.state.tasks}
                                deleteATask={this.deleteATask.bind(this)}
                            />
                        </div>
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
