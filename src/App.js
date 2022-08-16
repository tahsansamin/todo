import React from "react";
import "./App.css";
import Checkcomponent from "./Components/checkcomponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";

function App() {
  const [todos, setToDos] = React.useState([]);
  const [todo, setToDo] = React.useState();
  const finalArr = JSON.parse(localStorage.getItem("tasks") || "[]");

  const addtolist = () => {
    if(todo.length !== 0){
      setToDos(todos.concat([todo]));
      const myArr = JSON.parse(localStorage.getItem("tasks") || "[]");
      myArr.push(todo);
      localStorage.setItem("tasks", JSON.stringify(myArr));
      console.log(todo)
      
    }else{
      alert("Cannot add undefined task")
    }
  };

  return (
    <div className="app">
      <h1 className="text-light text-center mt-0">
        What's the Plan for today?
      </h1>
      <input
        className="custominput"
        type="text"
        placeholder="Enter task "
        onChange={(e) => {
          setToDo(e.target.value);
        }}
      />

      <button type="button" className="btn btn-danger mt-3" onClick={addtolist}>
        Add task
      </button>
      <div className="finalbox">
        {finalArr.map((excercise) => (
          <Checkcomponent task={excercise} />
        ))}
      </div>
    </div>
  );
}

export default App;
