import React, {Component} from 'react';

class Task extends Component {
    render() {
        return (
            <div className="task mb-2">
                <p>{this.props.title}</p>
                <button className="btn btn-danger" onClick={(e) =>
                    this.props.deleteTask(e, this.props.id)}>Удалить</button>
            </div>
        );
    }
}

export default Task;