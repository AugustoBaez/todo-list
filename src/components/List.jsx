import React from "react";

const List = ({todos}) => {

    // const deleteTask = (props) => {
    //     props.filter((_, index) => index !== props)

    // }

    return (
        <div>

            {todos.map((task) =>
                <>
                    <p>{task.content}</p>
                    <input type="checkbox"/>
                    <button>Delete</button>
                </>
            )}
        </div>
    )

}
export default List