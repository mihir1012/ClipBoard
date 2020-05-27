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
    const edit=false;
    console.log(id)
    newTodo.push({id:id,description:this.state.current,editable:edit});
    this.setState({todos:newTodo,demoid:id});
  }

  onDeleteHandler=(index)=>{
    console.log("you click me")
    const temp =[...this.state.todos];
    temp.splice(index,1);
    this.setState({todos:temp})
  }

  onEditHandler=(id)=>{
    console.log(id)
    const todoIndex = this.state.todos.findIndex( p => {
      return p.id === id;
    });

    const todo = {...this.state.todos[todoIndex]};
    todo.editable=true;

    const todos =[...this.state.todos];
    todos[todoIndex]=todo;

    this.setState({todos:todos});

  }

  onEditInputHandler=(event,id)=>{
    console.log(id)
    const todoIndex = this.state.todos.findIndex( p => {
      return p.id === id;
    });

    const todo = {...this.state.todos[todoIndex]};
    todo.description=event.target.value;

    const todos =[...this.state.todos];
    todos[todoIndex]=todo;

    this.setState({todos:todos});

  }

  OnEnterHandler=(e,id)=>{
    var enterkey=13;
    if(e.which==enterkey){
      const todoIndex = this.state.todos.findIndex( p => {
        return p.id === id;
      });
  
      const todo = {...this.state.todos[todoIndex]};
      todo.editable=false;
  
      const todos =[...this.state.todos];
      todos[todoIndex]=todo;
  
      this.setState({todos:todos});
    }
}

  render(){
   
  return (
    <div className="App">
      <Todo onchange={(event)=>this.onInputHandler(event)} add={this.onAddHandler} />
      <Todos data={this.state.todos} 
      edit={this.onEditHandler} 
      editInput={this.onEditInputHandler}
      enter={this.OnEnterHandler}
      delete={this.onDeleteHandler} />
    </div>
  );
}
}

export default App;
