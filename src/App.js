import React, { useState } from "react";
import './App.css';

const App = () =>{
  const [task, setTasks] = useState([
    {
      id:'1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id:'2',
      title: 'Ler livros',
      completed: true,
    }
  ]);
return (
    <>
      <div className="container"></div>
    </>
);

};

export default App;