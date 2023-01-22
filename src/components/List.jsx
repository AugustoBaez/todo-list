import React, {useState} from "react";

const List = ({ todos, setTodos }) => {

    const [tarea, setTarea] = useState("")
    const [completado, setCompletado] = useState(false)

    console.log(todos[0].completed)
    const deleteTask = (tarea) => {
        setTodos(todos.filter(el => el.content !== tarea.content))
    }


    // const completado = (task) => {
    //     return !task
    // }
    return (
        <>
            {todos.map((task) => 
                <div className="task">
                    <p>{task.content}</p>
                    <input type="checkbox" />
                    <button onClick={() => deleteTask(task)}>Delete</button>
                </div>
            )}
        </>
    )

}
export default List