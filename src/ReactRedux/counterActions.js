import { AddNumber, ReduceNumber } from "./actionsType";


export function addNumber(number){
    return {
        type: AddNumber,
        number,
    };
}

export function reduceNumber(number){
    return {
        type: ReduceNumber,
        number,
    };
}