import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
// import axios from "axios";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import NavBar from "../navbar/NavBar";

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

    // // 4 вызывается тогда, когда нужно синхронизировать новыке пропсы со стейтом,  обновление выполняется путем
    // // возвращения нового стейта, если ничего не обновилось, то возврат null, используется редко
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return null;
    // }

    // 2 используется часто
    componentDidMount() {
        const localTasks = JSON.parse(localStorage.getItem("tasks"));
        if (localTasks) {
            this.setState({tasks: localTasks})
        }

        // axios.get(
        //     "http://jsonplaceholder.typicode.com/todos"
        // )
        //            .then(res =>{
        //         this.setState({
        //             tasks: res.data // в  data  лежат полученные данные
        //         })
        //     })
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