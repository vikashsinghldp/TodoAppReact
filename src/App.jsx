import React, { useState } from 'react'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const[newItem,setNewItem]=useState("")
  const [todo, setTodo]=useState([])
  const handleSubmit=(e)=>{
      e.preventDefault();
      setTodo((currentTodo)=>{return [...currentTodo,{id:crypto.randomUUID(),title:newItem,completed:false}]})
     setNewItem("")
      
  }
  const toggleTodo=(id,completed)=>{
    setTodo(currentTodo=>{
      return currentTodo.map(todo=>{
        if(todo.id === id){
        return {...todo,completed}
      }
      return todo;
      })
      
    })

  }
 const deleteTodo=(id)=>{
  setTodo(currentTodo=>{
    return currentTodo.filter(todo=>todo.id !== id)
  })
 }
  return (
    <div>
      <form className='form-control m-3 p-3' onSubmit={handleSubmit}>
        <label className='list-group-item'>New Item</label>
        <input className='form-control mt-2' type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} />
        <button className='btn btn-primary mt-2' type='submit'>Add</button>
      </form>
      <div className='container-fluid'>
      <h1>Todo List</h1>
      <ul className='list-group'>
        {todo.length===0 && "No Todo"}
        {todo.map(todo=>{
          return  <li key ={todo.id}
      className='list-group-item'>
          <input type="checkbox" className='form-check-input ' checked={todo.completed}
          onChange={e=>toggleTodo(todo.id,e.target.checked)}/><label className='form-label mx-2 '>{todo.title}</label>
          <button className='btn btn-danger btn-sm mx-2 ' onClick={()=>deleteTodo(todo.id)}>Delete</button></li>
        })}
       
      </ul></div>
    </div>
  )
}

export default App
