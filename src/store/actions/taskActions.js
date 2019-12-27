import axios from "axios"
import * as actions from "./index";

export const addTask = (task) => {
    return {
        type: actions.ADD_TASK,
        task // task: task
    }
};

export const getTasks = () => async dispatch => {
    const res = await axios.get("http://jsonplaceholder.typicode.com/todos");
    dispatch({type: actions.GET_TASKS, tasks: res.data})
};

export const deleteTask = (id) => {
    return {
        type: actions.DELETE_TASK,
        id   // id: id
    }
};


// export const getTasks = () => {
//     return function (dispatch) {
//         axios.get("http://jsonplaceholder.typicode.com/todos")
//             .then(res => dispatch({type: actions.GET_TASKS, tasks: res.data} ))
//     }
// };
