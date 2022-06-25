import { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

// import default style
import "./styles/main.css";

function App() {
  const [num, setNum] = useState(0);
  let date = new Date();

  const handleIncrement = () => setNum(num + 1);
  const handleDecrement = () => setNum(num - 1)

  return (
    <div className="App">
      <h1 style={{ width: "100%" }}>Welcome to App! {date.toDateString()}</h1>

      <h3>Your number is {num}</h3>
      <Button text="Increment Me!" onClick={handleIncrement} />
      <Button text="Decrement Me!" onClick={handleDecrement} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
