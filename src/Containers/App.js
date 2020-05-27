import React, { Component } from 'react';
import './App.css';
import Todo from '../Components/Todo/Todo';
import Todos from '../Components/Todos';

class App extends Component {

  state=({
    demoid:0,
    todos:[],
    current:'',
  })

  onInputHandler=(event)=>{
    const newTodo = event.target.value;
    this.setState({current:newTodo});
  }

  onAddHandler=()=>{
    const newTodo = [...this.state.todos];
    const id = this.state.demoid+1;
    console.log(id)
    newTodo.push({id:id,description:this.state.current});
    this.setState({todos:newTodo,demoid:id});
  }

  onDeleteHandler=(index)=>{
    console.log("you click me")
    const temp =[...this.state.todos];
    temp.splice(index,1);
    this.setState({todos:temp})
  
  }


  render(){
   
  return (
    <div className="App">
      <Todo onchange={(event)=>this.onInputHandler(event)} add={this.onAddHandler} />
      <Todos data={this.state.todos} delete={this.onDeleteHandler}/>
    </div>
  );
}
}

export default App;
