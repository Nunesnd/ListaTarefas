import React, { useState } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/header";
import TaskDetails from "./components/TaskDetails";

import './App.css';

const App = () =>{
  const [tasks, setTasks] = useState([
    {
      id:'1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id:'2',
      title: 'Ler livros',
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) =>{
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        //id: Math.random(10),
        completed: false,
      },
    ];
    setTasks(newTask);  
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };
  
  return (
    <Router>
      <div className="container">
          <Header/>

          <Route
            path="/"
            exact
            render={() => (
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}/>
              </>
            )}
          
          />
          <Route path="" exact render={TaskDetails}/>

      </div>
    </Router>
  );

};

export default App;