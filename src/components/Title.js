import React from "react";

const Title = ({text, strongText}) => {
  return (
    <>
      {" "}
      <div className="section-title">
        <h2>
          {text} <span>{strongText}</span>
        </h2>
      </div>
    </>
  );
};

export default Title;
