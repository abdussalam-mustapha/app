import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./api.css"

import avi from "../img/av3.png"
import { useEffect } from 'react';

const Practice = () => {

   const [todos, setTodos] = useState(null)
 


   useEffect(() => {
    axios.get(`https://dummyjson.com/todos?limit=6`).then((response) => {
      setTodos(response.data.todos);
      console.log(response)
    });
  }, []);

  if (!todos) return null;
   

  return (
    <div className='cardParent'>

         {
          todos.map((todo) => {
            return (
            
              <div className='card'>
            <img src={avi} alt={todo.id} />
              <div className='textSection'>
                  <span><p>{todo.id}</p> <p>USER ID:{todo.userId}</p></span>
                  <p>TODO: {todo.todo}</p>
                  <p>Completed: {todo.completed}</p>
              </div>
          </div>
        
            )
          })
         };

  
    </div>
  )
}

export default Practice;