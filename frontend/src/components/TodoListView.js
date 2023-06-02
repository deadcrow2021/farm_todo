import TodoItem from "./Todo";

const TodoListView = (props) => {
  return (
    <div>
        <ul>
            {props.todoList.map((todo, i) => <div key={i}><TodoItem todo={todo}/></div>)}
        </ul>
    </div>
  )
}

export default TodoListView