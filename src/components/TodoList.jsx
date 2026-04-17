import React, {useState} from 'react';

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        setItems([...items, input])
        setInput('');
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleAdd}>
                <input
                 type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 placeholder="Enter a task.." />

                <button type="submit">Add</button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;