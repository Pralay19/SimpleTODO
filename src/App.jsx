import { useState } from "react"
import "./styles.css"
/* tslint:disable:no-unused-variable */

export default function App(){
  const [newItem,setNewItem]=useState("");//Define state for all the components for which you want the code to re-render
  const [todos,setTodos]=useState([]);
  

function handleSubmit(e){
    e.preventDefault();
    setTodos((currentTodos)=>{
      return [
        ...currentTodos,{
          id:crypto.randomUUID(),
          title:newItem,
          completed:false
        }
      ]
    })
    setNewItem("");
  }
function handleDeleteItem(givenid){
  // e.preventDefault;
  setTodos((currentTodos)=>{
    const filteredTodos=currentTodos.filter(todo=>todo.id!=givenid);
    return [filteredTodos];
  })
}
function toggleTodo(givenid,completed){
  
}

console.log(todos);
  return(
    <>
      <form onSubmit={handleSubmit} action="" className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} 
          onChange={e=>setNewItem(e.target.value)} 
          type="text" id="item" />
          <button className="btn add-btn">Add</button>
        </div>
      </form> 
      <h1 className="header">TODO List</h1>
      <ul className="list">
        {todos.map(todo=>{
          return (
            <li key={todo.id}>
          <label htmlFor="">
            <input type="checkbox" onChange={e =>{toggleTodo(todo.id,e.target.checked)}} checked={todo.completed}/>
            {todo.title}
          </label>
          <button onClick={e=> handleDeleteItem(todo.id)} className="btn btn-danger">Delete</button>
        </li>
          )
        })}
        
        
      </ul>
    </>
  )
}