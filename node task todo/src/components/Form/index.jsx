import { useState } from "react";
import "./style.css"



const TodoForm = () => {
  const [todoEvent, setTodo] = useState("")


  return (
    <form onSubmit={(event)=> {
      event.preventDefault()
    

   
      
      
    }}>
        <h2>Create your new task</h2>
        <div className='add-box'>
        <input type="text" placeholder='enter Todo here...'
          onChange={(event) => {
            setTodo(event.target.value)
            console.log(todoEvent);
            
          }}/>
        <button>Add new todo</button>    
        </div>
          
        <div>
          <p>{todoEvent}</p>
        </div>
    </form>

    

  )
}

export default TodoForm