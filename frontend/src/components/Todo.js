import React from "react";

const TodoItem = (props) => {

    const deleteTodoHandler = async (title) => {
        await fetch(`http://127.0.0.1:8000/data/delete/${title}`, {
            method: 'DELETE'
        }) 
    }

  return (
    <div>
        <p>
            <span style={{ fontWeight: 'bold, underline' }}>{props.todo.title} : </span> {props.todo.description} 
            <button onClick={() => deleteTodoHandler(props.todo.title)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>X</button>
        </p>
            <hr></hr>
    </div>
  )
}

export default TodoItem