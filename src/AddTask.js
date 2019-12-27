import React, {Component} from 'react';

// import "./AddTask.css"

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addTask({
            id: Date.now(),
            title: this.state.title
        });
        this.setState({title: ""})
    }

    render() {
        return (
            <form id="add-task" onSubmit={this.onSubmit}>
                <h1>Добавить задачу</h1>
                <div className="form-group">
                    <label htmlFor="title">Название</label>
                    <input className="form-control"
                           type="text"
                           name="title"
                           value={this.state.title}
                           onChange={this.handleChange}/>
                </div>
                <button className="btn btn-success"
                        id="btn-add"
                >Добавить
                </button>
            </form>
        );
    }
}

export default AddTask;