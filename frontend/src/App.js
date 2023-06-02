import './App.css';
import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoListView from './components/TodoListView';

function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [description, setDesc] = useState('')

  useEffect(() => {
    (async () => {
        let req = await fetch('http://127.0.0.1:8000/data');
        let data = await req.json()
        setTodoList(data)
    })()
  }, []);

  const addTodoHandler = async () => {
            await fetch('http://127.0.0.1:8000/data/create', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, description})
        })
  }

  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
      <h1 className="card text-white bg-primary mb-1">Task Manager</h1>
      <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
        <span className="card-text"> 
          <input className="mb-2 form-control titleIn" onChange={(e) => {setTitle(e.target.value)}} placeholder='Title'/> 
          <input className="mb-2 form-control desIn" onChange={(e) => {setDesc(e.target.value)}} placeholder='Description'/>
          <button className="btn btn-outline-primary mx-2 mb-3" onClick={addTodoHandler} style={{'borderRadius':'50px',"fontWeight":"bold"}}>Add Task</button>
        </span>
        <h5 className="card text-white bg-dark mb-3">Your Tasks</h5>
        <div >
          <TodoListView todoList={todoList}/>
        </div>
      </div>
      <h6 className="card text-dark bg-warning py-1 mb-0" >Copyright 2021, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
