import React, { useState } from 'react';
import './Todolist.css';

const Todolist = () => {
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        // code here
        e.preventDefault();

        // add tasks
        if (!taskInput || /^\s*$/.test(taskInput)) {
            return;
        }

        const newTask = [...tasks, taskInput];

        setTasks(newTask);
        console.log(tasks);

        // reset value input
        setTaskInput('');
    };

    const handleChange = (e) => {
        // code here
        setTaskInput(e.target.value);
        console.log(taskInput);
    };

    return (
        <div className="todolist-container">
            <h1>To Do List</h1>
            <div className="gray-container">
                <form onSubmit={handleSubmit} className="newtask" id="newtask">
                    <input type="text" placeholder="input task" id="task-input" value={taskInput} onChange={handleChange} />
                    <button>Add</button>
                </form>

                <div className="tasks">
                    {tasks.map((item) => {
                        return (
                            <div className="task">
                                <span>{tasks.indexOf(item) + 1}. </span>
                                <span>{item}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Todolist;
