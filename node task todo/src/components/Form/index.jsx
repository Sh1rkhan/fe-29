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

<form className='m-24 p-12 border-3 border-solid rounded-2x' onSubmit={(event)=>{
      event.preventDefault()
    
         
      
      
    }}>
    <input className='mb-2.5 p-1.5 border-2 border-solid rounded-lg w-full'
    type="text"
    value={input}
    onChange={handleInputChange}
    onKeyPress={handleKeyPress}
    placeholder="Add a new todo"
  />
  <button onClick={addTodo} className='mb-2.5 p-1.5 border-2 border-solid rounded-lg ml-1 bg-yell text-white'>Add</button>
  <ul className=''>
    {todos.map((todo, index) => (
      <li key={index} className='mb-2.5 p-1.5 border-2 border-solid rounded-lg ml-1 bg-yellow-300 text-white'>
        {todo}
        <button onClick={() => handleDelete(index)}>Delete</button>
      </li>
    ))}
  </ul>
  </form>
    

  )
}

export default TodoForm 
