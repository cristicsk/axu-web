import React from "react";

// function Button () {}
// const Button = () => {}

const afiseazaText = () => {
  console.log("teeeeeeeext");
};

const Button = (props) => {
  const [x, setX] = React.useState(2);

  const incrementX = () => {
    setX(x + 1);
  };

  const consoleLogX = () => {
    console.log(x);
  };

  return (
    <div className="flex flex-col bg-gray-500 text-lg">
      <button onClick={incrementX}>cresteX</button>
      <button onClick={consoleLogX} className="">
        Afisare
      </button>
      <div className="mx-auto">{x}</div>
    </div>
  );
};

export default Button;
