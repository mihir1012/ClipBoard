import React from 'react';
import TodoDisplay from './TodoDisplay/TodoDisplay'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1024,
      height: 450,
    },
  }));

const Todos = (props)=>{

    const classes = useStyles();
    
    return (
      <div className={classes.root}>
      <GridList cellHeight={400}className={classes.gridList} cols={5}>
        {props.data.map((todos,index) => (
          <GridListTile key={todos.id}>
            <TodoDisplay click={()=>props.delete(index)} key={todos.id} data={todos.description}  />
          </GridListTile>
        ))}
      </GridList>
    </div>
    )
    
    /*props.data.map((todos,index) =>{
        return (

            

            <TodoDisplay click={()=>props.delete(index)} key={todos.id} data={todos.description}  />

        )
   })*/
}

export default Todos;