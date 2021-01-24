import { useState, useEffect } from "react";
const Compteur = (props) => {
  const [count, setCount] = useState(0);

  // fetch est une méthode présente dans le noyau JS
  const getData = async () => {
    const response = await fetch("https://swapi.dev/api/people/1");
    const data = await response.json();
    console.log(data);
  };
  //   const getData = () => {
  //     fetch("https://swapi.dev/api/people/1")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   };

  // le tableau est vide => donc la fonction getData() ne sera appelée qu'au montage 
  // si on avait précisé par ex [count], on aurait appelé la getData() à chaque fois que la valeur de count change
  useEffect(() => {
      getData();
  }, []);

  // ici, on appelle le console.log avec un tableau vide, ce qui signifie qu'il ne s'exécutera qu'au moment du montage 
  // componentDidMount
  useEffect(() => {
    console.log("montage");
  }, []);

  //ici, on met un return dans le useEffect => sera forcément fait au moment du démontage du count, car il est précisé dans le tableau 
  // componentWillUnmount 
  useEffect(() => {
    console.log(count);
    return () => {
      console.log("demontage");
    };
  }, [count]);

  return (
    <>
      <h1>Vous avez cliqué: {count} fois</h1>
      <button onClick={() => setCount(count + 1)}>+1!</button>
    </>
  );
};

export default Compteur;