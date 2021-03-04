import React, { useState } from "react";
import "./TodoApp.css";

export default function TodoApp(props) {

  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

//   const [toggleState, setToggleState] = useState("off");

  
//   function toggle() {
//     setToggleState(toggleState === "off" ? "on" : "off");
//   }


  function getData(val) {
    setData(val.target.value);
    setPrint(false);
    console.log(val.target.value);
  }
  
  return (
    <div className= "TodoList">
      <h1 className="TodoList_title">ToDolist</h1>
      <input onChange={getData} type="text"></input>
      <button className="btn" onClick={() => setPrint(true)}>
        Add task to my ToDolist
      </button>
      {print ? (
        <p className="TodoList_items">
          <input className="checkbox" type="checkbox" />
          {data}
          <button>x</button>
        </p>
      ) : null}
    </div>
  );
}


// import React, { useState } from "react";

// export default function Toggle(props) {
//   const [toggleState, setToggleState] = useState("off");

//   function toggle() {
//     setToggleState(toggleState === "off" ? "on" : "off");
//   }

//   return <div className={`switch ${toggleState}`} onClick={toggle} />;
// }
