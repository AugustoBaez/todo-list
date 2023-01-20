import React, { useState } from 'react'

const Todo = ({todos, setTodos}) => {

    const [content, setContent] = useState("")
    const [completed, setCompleted] = useState(false)

    // const tasks = [
    //     "Get python black belt",
    //     "holaholahola",
    //     "hacer tarea de bootcamp",
    //     "estudiar",
    //     "hacer comida"
    // ]

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            content,
            completed
        }
        
        setTodos([...todos, newTask])

        // setContent("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add Todo' onChange={(e) => setContent(e.target.value)}></input>
           <button type='submit'>Add</button> 
        </form>
    )

}
export default Todo