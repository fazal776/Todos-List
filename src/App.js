import './App.css';
import Header from './My components/Header.js'
import About from './My components/About.js'
import Todos from './My components/Todos.js'
import Footer from './My components/Footer.js'
import AddTodo from './My components/AddTodo.js'
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = {};
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    setTodo(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  const addTodo = (title, desc)=>{
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    setTodo([...todos, myTodo]);
  }

  const [todos, setTodo] = useState(initTodo)
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  let sno = todos.length + 1;
  return (
    <Router>
      <Header title="Todos List" searchBar={false}/>
      <Routes>
          <Route exact path="/" element={
              <>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete}/>
              </>
            
          }/>
          <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;

