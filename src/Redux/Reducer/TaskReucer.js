import { ADD_TASK, COMPLET_TASK, DELET_TASK, EDIT_TASK } from "../Action/ActionTypes";

const InescilState = {
  taskListe: [
    {
      id: 0,
      name: "Learn HTML And CSS",
      isDone: true,
    },
    {
      id: 1,
     name: "Learn JS And ES6",
      isDone: true,
    },
    {
      id: 2,
      name: "Learn MODE JS",
      isDone: false,
    },
  ],
};

export const TaskReucer = (state = InescilState, { type,payload}) => {
  switch (type) {
    case ADD_TASK :
      return { ...state, taskListe:[...state.taskListe,payload] };

    case DELET_TASK:
      return {
        ...state,
        taskListe: state.taskListe.filter((task) => task.id !== payload),
      };

    case COMPLET_TASK :
      return {
        ...state,
        taskListe: state.taskListe.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        taskListe: state.taskListe.map((task) =>
          task.id === payload.id ? { ...task, name: payload.value } : task
        ),
      };
    default:
      return state;
  }
};

export default TaskReucer;
