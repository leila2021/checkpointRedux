import {ADD_TASK,EDIT_TASK,COMPLET_TASK,DELET_TASK} from './ActionTypes'
export const addtask = (newtask) => {
    return {
        type:ADD_TASK,
        payload:newtask
     };
};


export const deletetask = (id) => {
    return {
        type:DELET_TASK,
        payload:id,
    };
};

export const completetask = (id) => {
    return {
        type:COMPLET_TASK,
        payload:id,
    };
};

export const edittask = (id,value) => {
    return {
        type:EDIT_TASK,
        payload: {id,value}
    };
};

