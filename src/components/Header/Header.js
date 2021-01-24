import { useState } from 'react';

const Header = (props) => {
    const [inputValue, setInputValue] = useState("Hey");

    const HandleOnChange = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    };

    return (
        <>
            <header style={props.background}>
                <h1>{inputValue}</h1>
            </header>
            <input type="text" value={inputValue} onChange={HandleOnChange}></input>
            <br/>
        </>
    );
}

export default Header;

// CORRECTION

// const Content = (props) => {
//     const { contentStyle } = props;
//     return (
//       <div style={contentStyle}>
//         <h1>Ceci est ma div</h1>
//       </div>
//     );
// };
// export default Content;