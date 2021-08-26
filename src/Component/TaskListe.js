import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem';
const TaskListe = () => {
    const taskListe = useSelector(state =>state.TaskReucer.taskListe)
    
    return (
        <div>
            {
                taskListe.map ( (el,i) => <TaskItem key={i} todo={el} />

                )
            }
        </div>
    )
}

export default TaskListe
