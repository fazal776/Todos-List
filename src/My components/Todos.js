import React from 'react'
import Todo from './Todo.js'

export default function Todos(props) {
  let Style = {
    marginBottom: "5rem"
  }
  return (
    <div className='container' style={Style}>
      <h3 className="my-3">Todo List</h3>
      {props.todos.length === 0? "No Todo(s) to display" :
      props.todos.map((todo)=>{
        return (
          <>
            <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            <hr/>
          </>
        )
        
      })}
    </div>
  )
}
