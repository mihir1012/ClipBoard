import React, { Component } from 'react';
import './App.css';
import Todo from '../Components/Todo/Todo';
import Todos from '../Components/Todos';

class App extends Component {

  state=({
    todos:[],
    current:'',
  })

  onInputHandler=(event)=>{
    const newTodo = event.target.value;
    this.setState({current:newTodo});
  }

  onAddHandler=()=>{
    const newTodo = [...this.state.todos];
    newTodo.push(this.state.current);
    this.setState({todos:newTodo});
    console.log(this.state.todos)
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
