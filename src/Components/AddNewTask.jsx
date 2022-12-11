import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAdd } from '../redux/actions'

const AddNewTask = () => {
    const [newAction, setNewAction] = useState("")
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newOne={
            id:Math.random(),action:newAction,isDone:false
        }
        dispatch(handleAdd(newOne))
    }
  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <input type="text" value={newAction} onChange={e=>setNewAction(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddNewTask