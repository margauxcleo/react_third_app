import { useState } from 'react';

const Todo = (props) => {
    const [inputValue, setInputValue] = useState("");

    const {todos, setTodos} = props;

    const HandleOnChange = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (inputValue === "") return;
        setTodos([...todos, inputValue]);
        setInputValue("");
    };

    return (
        <>
            <br/>
            <h3>Ajouter une tâche:</h3>
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={inputValue} onChange={HandleOnChange}></input>
            </form>
            <Todo todos={todos} setTodos={setTodos}/>
            <ul>
                {todos.map((todo, index) => {
                return (
                    <li key={todo + index}>
                    <p>{todo}</p>
                    </li>
                );
                })}
            </ul>
        </>
    );
}

export default Todo;