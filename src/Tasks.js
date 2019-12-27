import React, {Component} from 'react';
import Task from "./Task";

class Tasks extends Component {
    render() {
        return (
            <div>
                <h1>Список задач!</h1>
                {this.props.tasks ? this.props.tasks.map(task => {
                    return <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        delete={this.props.delete}/>
                }):
                    (
                        [<h1>Загрузка</h1>]
                    )
                }
            </div>
        );
    }
}

export default Tasks;