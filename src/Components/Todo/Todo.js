import React from 'react';

const Todo = (props)=>{
    return(
    <div>
    <input type='text' onChange={props.onchange} />
    <button onClick={props.add}>Add</button>
    </div>
    );
}

export default Todo;