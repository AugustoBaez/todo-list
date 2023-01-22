import React, { useState } from "react";

const List = ({ todos, setTodos }) => {

    const deleteTask = (task) => {
        setTodos(todos.filter(el => el.id !== task.id))
    }

    const completadoHandler = (task) => {
        setTodos(todos.map(item => {
            if (item.id == task.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    return (
        <>
            {todos.map((task) =>
                <div className="task">
                    <div className="text">
                        <p key={task.id} className={`checkItem ${task.completed ? "completado" : ""}`}>{task.content}</p>
                        <input type="checkbox" onClick={() => completadoHandler(task)} />
                    </div>
                    <button onClick={() => deleteTask(task)}>Delete</button>
                </div>
            )}
        </>
    )

}
export default List