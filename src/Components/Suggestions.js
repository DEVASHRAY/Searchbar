import React from "react";

const Suggestions = (props) => {
  const { options, setInput } = props;

  const handleOptions = (option) => {
    setInput(option);
  };
  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            type="button"
            className="list-group-item list-group-item-action options list"
            onClick={() => handleOptions(option)}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

export default React.memo(Suggestions);
