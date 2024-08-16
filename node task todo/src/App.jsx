

import './App.css'
import Form from "./components/Form";

function App() {
  // // const [todo, setToDos] = useState(0)

  // return (
  //   <div className='container'>
  //   <h1>
  //     ToDo List using JavaScript
  //   </h1>
  //     <div className='todo-container'>
  //       <Form></Form>
        
  //     </div>
  //   </div>
  // )

 
  return (
    
    <div className="container">
      <h1 className='text-center'>ToDo List using JavaScript</h1>

      <div className='w-4/5 border-2 border-solid rounded-lg p-1.5'>
      <Form/>
    </div>
    </div>
  );  
}


export default App





