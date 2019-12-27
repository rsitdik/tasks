// root reducer, который объединяет все другие редукторы
import {combineReducers} from "redux";
import taskReducer from "./taskReduser";

export default combineReducers({
    taskReducer // равносильно taskReducer: taskReducer - в ES6 если название и значение совпадает, то можно оставить одно.
})
