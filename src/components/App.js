import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import NavBar from "./NavBar";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };

        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(task) {
        this.setState({
            tasks: [task, ...this.state.tasks]
        })
    }

    deleteTask(e, id) {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        })
    }

    // 2 используется часто
    componentDidMount() {
        const localTasks = JSON.parse(localStorage.getItem("tasks"));
        if (localTasks) {
            this.setState({tasks: localTasks})
        }
    }

    // 3 вызывается, когда обновились props или state
    componentDidUpdate(prevProps, prevState, snapshot) {
        const tasks = JSON.stringify(this.state.tasks);
        localStorage.setItem("tasks", tasks);
    }

    // 1 вызывается первым
    render() {
        return (
            <div className="container">
                <NavBar />
                <Switch>
                    <Route exach path="/add" render={() => <AddTask addTask={this.addTask}/>}/>

                    {/*самый корневой компонент "/" должен быть в самом низу*/}
                    <Route exach path="/"
                           render={() => {
                               return <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
                           }}/>
                </Switch>
            </div>
        );
    }
}

export default App;