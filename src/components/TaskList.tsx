import * as React from 'react'
import { ITask } from "../interface/Task"


class TaskList extends React.Component<ITaskListProps, any> {

    render(): JSX.Element[] {
        return this.props.tasks.map((task: ITask, i: number) => {
            return (
                <div className={"col-md-5 mt-2"} key={task.id}>
                    <div className={"card card-body"}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button
                            onClick={() => this.props.deleteATask(task.id)}
                            className={"btn btn-info w-100"}>
                            Delete
                        </button>
                    </div>
                </div>
            )
        })
    }

}

interface ITaskListProps {
    tasks: ITask[]
    deleteATask: (id: number) => void;
}

export default TaskList;
