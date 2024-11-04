import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-200 text-black p-4 rounded-xl">Hello world!</h1>
      <Card userName={"Prolay"} position="fulstack dev"/>
      <Card userName={"Nandita"} position={"Designer"}/>

    </>
  );
}

export default App;
