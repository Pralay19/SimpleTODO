import { useState } from "react"
// import "./styles.css"


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
// function handleDeleteItem(givenid){
//   // e.preventDefault;
//   setTodos((currentTodos)=>{
//     const filteredTodos=currentTodos.filter(todo=>todo.id!=givenid);
//     return [filteredTodos];
//   })
// }
function toggleTodo(id,completed){
  console.log(id,completed)
  setTodos(currentTodos =>{
    return currentTodos.map(todo =>{
      if(todo.id==id){
        todo.completed=completed
        return todo
      }
      return todo
    })
  })
}
function handleDelete(id){
  console.log(id);
  setTodos(currentTodos=>{
    return currentTodos.filter(todo=>todo.id!=id)
  })
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
              <input type="checkbox" checked={todo.completed} onClick={(e) => {toggleTodo(todo.id,e.target.checked)}}/>
          <label htmlFor="">
            
            {todo.title}
          </label>
          <button  className="btn btn-danger" onClick={(e)=>{handleDelete(todo.id)}}>Delete</button>
        </li>
          )
        })}
        
        
      </ul>
    </>
  )
}