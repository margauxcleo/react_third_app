const Bouton = (props) => {
    return (
        <>
            <button onClick={props.handleBackground}>Cliquez moi pour changer la couleur du fond</button>
        </>
    );
};

export default Bouton;

// CORRECTION

// const Bouton = (props) => {
//     const { handleClick } = props;
//     return <button onClick={handleClick}>Interupteur</button>;
// };
// export default Bouton;