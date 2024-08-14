import { useState } from 'react';
import "./style.css"



const TodoForm = () => {

const [todos, setTodos] = useState([])
const [input, setInput] = useState("")

const addTodo = () => {
  if (input.trim()) {
    setTodos([...todos, input]);
    setInput('');
  }
};

const handleInputChange = (event) => {
  setInput(event.target.value);
};

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
};

const handleDelete = (index) => {
  setTodos(todos.filter((_, i) => i !== index));
};




  // const [todos, setTodo] = useState("")


  return (
    // <form onSubmit={(event)=> {
    //   event.preventDefault()
    //   todos
         
      
      
    // }}>
    //     <h2>Create your new task</h2>
    //     <div className='add-box'>
    //     <input type="text" placeholder='enter Todo here...'
    //       onChange={(event) => {
    //         setTodo(event.target.value)
    //         // console.log(todoEvent);
            
    //       }}/>
    //     <button>Add new todo</button>    
    //     </div>
          
    //     <div className="todoList">
    //       <p>{todo}</p>
    //     </div>
    // </form>

<form onSubmit={(event)=> {
      event.preventDefault()
    
         
      
      
    }}>
    <input
    type="text"
    value={input}
    onChange={handleInputChange}
    onKeyPress={handleKeyPress}
    placeholder="Add a new todo"
  />
  <button onClick={addTodo}>Add</button>
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>
        {todo}
        <button onClick={() => handleDelete(index)}>Delete</button>
      </li>
    ))}
  </ul>
  </form>
    

  )
}

export default TodoForm 
