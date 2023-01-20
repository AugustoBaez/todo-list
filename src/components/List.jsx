import React from "react";

const List = ({ todos }) => {

    const deleteTask = (props) => {
        props.filter()
        console.log(props, "hola")
    }

    return (
        <>
            {todos.map((task, index) => 
                <div className="task">
                    <p>{task.content}</p>
                    <input type="checkbox" />
                    <button>Delete</button>
                </div>
            )}
        </>
    )

}
export default List