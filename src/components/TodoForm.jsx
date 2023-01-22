import React, { useState } from 'react'

const Todo = ({ todos, setTodos }) => {

    const [content, setContent] = useState("")
    const [completed, setCompleted] = useState(false)
    const [id, setId] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, { content: content, completed: false, id: Math.random() * 100 }])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add Todo' onChange={(e) => setContent(e.target.value)}></input>
            <button type='submit' className="addBtn">Add</button>
        </form>
    )

}
export default Todo