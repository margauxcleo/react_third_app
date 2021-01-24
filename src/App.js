import './App.css';
import { useState } from 'react';
import Header from "./components/Header/Header";
import Bouton from "./components/Bouton/Bouton";
import Todo from "./components/Todo/Todo";
import Compteur from './components/Compteur/Compteur';


function App() {

  const blue = "blue";
  const grey = "grey";

  const [background, setBackground] = useState(grey);

  const styles = {
    backgroundColor: background
  };

  const handleBackground = (event) => {
    event.preventDefault();
    background === grey ? setBackground(blue) : setBackground(grey);
  };

  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header background={styles}/>
      <Bouton handleBackground={handleBackground} />
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
      <Compteur />
    </>
  );
}

export default App;

// CORRECTION 

// import { useState } from "react";
// import Content from "./components/Content/Content";
// import Bouton from "./components/Bouton/Bouton";
// function App() {
//   const [contentColor, setContentColor] = useState("grey");
//   const contentStyle = {
//     backgroundColor: contentColor,
//   };
//   const handleClick = (event) => {
//     event.preventDefault();
//     contentColor === "grey" ? setContentColor("blue") : setContentColor("grey");
//   };
//   return (
//     <>
//       <Content contentStyle={contentStyle} />
//       <Bouton handleClick={handleClick} changeColorContent={setContentColor} />
//     </>
//   );
// }
// export default App;
