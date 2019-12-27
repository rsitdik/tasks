import * as actions from "../actions"

const initialState = {
    tasks: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_TASKS:
            return {...state, tasks: action.tasks};

        case  actions.ADD_TASK:
            return {...state, tasks: [action.task, ...state.tasks]};

        case actions.DELETE_TASK:
            return {...state, tasks: state.tasks.filter((task) => task.id !== action.id)};
        default:
            return state;
    }
};
export default reducer;