import React from "react";
import Task from "./Task";
function App() {
  const [userInput, setUserInput] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  function handleChange(event){
    const value = event.target.value
    setUserInput (value)
  }
  function addTask (){
    if (userInput === "")return
    setTasks(oldTasks => {
      if (userInput.length > 17 ){
         const large = userInput.substring(0,17) + "\n" + userInput.substring(17,34)+ "\n" +userInput.substring(34,51)+ "\n" +userInput.substring(51,20000000000)
        return [...oldTasks, JSON.stringify(large) ]
      }else{
        return [...oldTasks, JSON.stringify(userInput) ]
      }
    })
    setUserInput("")

  }
  function mouseDown (e){
   e.target.classList.add("clicked")
  }
  function mouseUp (e){
   e.target.classList.remove("clicked")
  }
  function erase (e) {
     const index = e.target.parentElement.parentElement.id
     const intIndex = parseInt(index)
     setTasks(tasks.filter((value,index) => index !== intIndex ))
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} name="input" type="text" value= {userInput}/>
        <button 
        className="addBtn"
        onClick={addTask}
        onMouseDown={mouseDown} 
        onMouseUp={mouseUp} 
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {tasks.map((currentTask, index) => <Task key={Math.random()} id={index} text={JSON.parse(currentTask)} handleClick={erase}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
