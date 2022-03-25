import React from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = () => {
    return (
        <div className='add-task-container'>

            <input className='add-task-input' type="text"/>;
            
            <div className='adicionarBotao'>
                <Button>Adicionar</Button>
            </div>
        </div>
    )
}
 
export default AddTask;