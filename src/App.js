import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Body from "../src/component/Body";

 const AppLayout = () => (
    <div className="App"> 
      <Body/>
       
    </div>
 );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);