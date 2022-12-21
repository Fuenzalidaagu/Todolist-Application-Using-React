import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  function handleTaskInput(event) {
    setTaskInput(event.target.value);
  }

  function addTask(event) {
	if (event.key === 'Enter') {
	  const trimmedTaskInput = taskInput.trim();
  
	  if (!trimmedTaskInput) {
		return;
	  }
  
	  setTasks([...tasks, trimmedTaskInput]);
	  setTaskInput('');
	}
  }
  

  function deleteTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
	<div className='book'>
    	<div className="todo-list">
			<h1>TODO LIST</h1>
			<input
        		type="text"
        		placeholder="Añadir tarea"
        		value={taskInput}
        		onChange={handleTaskInput}
        		onKeyPress={addTask}
      		/>
      	{tasks.length > 0 ? (
        	<ul>
          	{tasks.map((task, index) => (
            	<li key={index}>
              	{task}
              	<button onClick={() => deleteTask(index)}>x</button>
            	</li>
          	))}
        	</ul>
      	) : (
        	<p>No hay tareas, añadir tareas</p>
      	)}
    	</div>
	</div>
  );
}

export default TodoList;