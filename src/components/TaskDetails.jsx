import React from 'react';
import Button from './Button';
import { useParams } from 'react-router-dom';
import './TaskDetails.css'


const TaskDetails = () => {
    const params = useParams();



    return ( 
        <>
            <div className="back-button-details">
                <Button>Voltar</Button>
            </div>

            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem suscipit quae nesciunt earum! Debitis asperiores dicta minima nulla quibusdam expedita voluptates suscipit enim facilis tenetur. Est explicabo quis dignissimos laboriosam.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;