import { useEffect, useState } from "react";
import { Button} from "react-bootstrap"
import { FaEdit ,FaTrashAlt } from "react-icons/fa"



export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  
  const [isEditing, setIsEditing] = useState(false);
  
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }


  function handleEditInputChange(e) {
    
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }

    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

 
  function handleUpdateTodo(id, updatedTodo) {
    
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
   
    setIsEditing(false);
    
    setTodos(updatedItem);
  }

  
  function handleEditClick(todo) {
 
    setIsEditing(true);
   
    setCurrentTodo({ ...todo });
  }

  return (

    <div>
      
      
     
      {isEditing ? (
       
        <form onSubmit={handleEditFormSubmit} style={{marginLeft:"40%"}}>
       
          
          
          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          
          <Button type="submit"variant="success" size="sm" style={{marginRight:"20px",marginLeft:"10px"}}>Update</Button>
          
          <Button onClick={() => setIsEditing(false)} variant="danger" size="sm">Cancel</Button>
        </form>
      ) : (
       
        <form onSubmit={handleFormSubmit} style={{marginLeft:"40%"}}>
        <p>
          <input
        
            type="text"
            placeholder="Add Task"
            value={todo}
            onChange={handleInputChange}
            
          />
          

          <Button type="submit"variant="info" size="sm" style={{marginLeft:"20px"}}>Add</Button>
          </p>
        </form>

      )}
        <ol>
          {todos.map((todo) => (
          <li key={todo.id}>
            <p style={{marginLeft:"30px", marginTop:"10px"}}>
            {todo.text}
            </p>
           
            <FaEdit onClick={() => handleEditClick(todo)} style={{marginLeft:"270px", marginTop:"12px", display:"flex", position:"absolute"}}></FaEdit>
            <FaTrashAlt onClick={() => handleDeleteClick(todo.id)} style={{marginLeft:"300px", marginTop:"12px", display:"flex", position:"absolute"}}></FaTrashAlt>
          </li>
        ))}
        </ol>
       

    </div>
  );
}