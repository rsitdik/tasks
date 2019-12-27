import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteTask} from "../store/actions/taskActions";

class Task extends Component {
    render() {
        return (
            <div className="task mb-2">
                <p>{this.props.title}</p>
                <button className="btn btn-danger"
                        onClick={() => this.props.deleteTask(this.props.id)}> Удалить
                </button>
            </div>
        );
    }
}

export default connect(null, {deleteTask})(Task);