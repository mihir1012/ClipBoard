import React from 'react';
import Todo from './Todo/Todo'

const Todos = (props)=>{
    return props.data.map((todos,index) =>{
        return  <h1 onClick={()=>props.delete(index)} key={todos}> {todos} </h1>
   })
}

export default Todos;