import React from "react";
import './SearchBar.css';
/**
 *
 * @param {function(string):void} onSubmit
 * @returns {Element}
 * @constructor
 */
export default function SearchBar({onSubmit}) {
    /**
     * @type {React.RefObject<HTMLInputElement>}
     */
    const textInput = React.createRef();
    const handleClick = (event) => {
        onSubmit(textInput.current.value)
    };
    return <div className="search-bar">
        <label>Enter Search Term</label>
        <div>
            <input ref={textInput} />
            <button onClick={handleClick}>Search</button>
        </div>
    </div>;
}
