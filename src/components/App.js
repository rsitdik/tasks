import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {getTasks} from "../store/actions/taskActions"

class App extends Component {
    componentDidMount() {
        this.props.getTasks();
    }

    render() {
        return (
            <div className="container">
                <NavBar />
                <Switch>
                    <Route exach path="/add" render={() => <AddTask />}/>

                    {/*самый корневой компонент "/" должен быть в самом низу*/}
                    <Route exach path="/"
                           render={() => {
                               return <Tasks tasks={this.props.tasks} />
                           }}/>
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        tasks: state.taskReducer.tasks
    }
};

export default connect(mapStateToProps, {getTasks})(App);
