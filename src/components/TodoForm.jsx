import React, { useState } from 'react'

const Todo = ({todos, setTodos}) => {

    const [content, setContent] = useState("")

    // const tasks = [
    //     "Get python black belt",
    //     "holaholahola",
    //     "hacer tarea de bootcamp",
    //     "estudiar",
    //     "hacer comida"
    // ]

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setTodos([...todos, content])

        setContent("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add Todo' onChange={(e) => setContent(e.target.value)} value={content}></input>
           <button type='submit'>Add</button> 
        </form>
    )

}
export default Todo