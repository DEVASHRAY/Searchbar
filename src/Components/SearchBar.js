import React, { useEffect, useRef, useState } from "react";
import Suggestions from "./Suggestions";
import { debounce, GetSuggestions, newOptions } from "./GetData";


const SearchBar = () => {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);

  const inputRef = useRef();
  const ulRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      ulRef.current.style.display = "block";
    });

    document.addEventListener("click", () => {
      ulRef.current.style.display = "none";
    });
  }, []);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
    setOptions(newOptions);
  };

  const handleClearBtn = () => {
    setInput("");
  };
  return (
    <>
      <div className="main">
        <div className="search-area">
          <input
            ref={inputRef}
            id="searchbar"
            className="form-control form-control-lg"
            type="text"
            placeholder="Search Here"
            value={input}
            onChange={handleInputChange}
            onKeyUp={debounce((event) => {
              GetSuggestions(event.target.value, event.keyCode);
            }, 200)}
          />
            {input.length > 0 ? <button className="clear" onClick={handleClearBtn}>
            X
          </button> : null } 
        </div>
        <ul className="suggestion-list" ref={ulRef}>
          <Suggestions options={options} setInput={setInput} />
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
