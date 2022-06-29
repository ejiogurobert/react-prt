import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Header />
      <ul>
        <li>Software Engineering</li>
        <li>Affiliate Marketing</li>
        <li>Automobile sales and dealings</li>
      </ul>
    </div>
  );
}

const Header = () => <h1>Welcome to ROB26 World</h1>;

ReactDom.render(<Greeting />, document.getElementById("root"));
