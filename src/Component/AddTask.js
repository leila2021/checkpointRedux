import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../Redux/Action/Action'

const AddTask = () => {
    const [texte,setTexte] = useState ("");
    const dispatch = useDispatch()
    const add = () => { 
        if (texte) {
            dispatch(addtask({ id:Math.random, name:texte.trim() ,isDone:false }))
        setTexte ("")
        } else {
            alert("Empty")
        }
     }
    return (
        <div>
          <input onChange={(e)=>setTexte(e.target.value)} type="text" value={texte} />
          <button onClick={ add} > Add Task  </button>
        </div>
    )
}

export default AddTask
