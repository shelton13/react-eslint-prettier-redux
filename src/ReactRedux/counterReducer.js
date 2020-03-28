import { AddNumber, ReduceNumber } from "./actionsType";


const init = {
    count: 0,
};

function countReducer(state = init, actions){
    switch (actions.type) {
        case AddNumber:
            return {
                ...state,
                count: state.count + parseInt(actions.number, 10),
            };
        case ReduceNumber:
            return {
                ...state,
                count: state.count - parseInt(actions.number, 10),
            };
        default:
            return state;
    }
}

export default countReducer;