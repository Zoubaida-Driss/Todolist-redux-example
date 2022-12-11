import { ADD_NEW_TASK, COMPLETE, DELETE, EDIT } from "./actionType";


const init = {
    todos: []
};

export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case ADD_NEW_TASK:

            return {
                ...state, todos: [...state.todos, payload]
            }
        case DELETE:
            return {
                ...state, todos: state.todos.filter(el => el.id !== payload)
            }
            case COMPLETE:
                return{
                    ...state,toods:state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
                }
                case EDIT:
                    return{
                        ...state,todos:state.todos.map(el=>el.id===payload.id?{...el,...payload}:el)
                    }

        default:
            return state
    }
}