import React from "react";

const List = (props) => {

    const {todos} = props
    // const deleteTask = (props) => {
    //     props.filter((_, index) => index !== props)
        
    // }

    return (
        <>
            {todos.map((task, index) => 
                <>
                    <p key={index}>{task.content}</p>
                    {/* <input type="checkbox"/>
                    <button>Delete</button> */}
                </>
            )}
        </>
    )

}
export default List