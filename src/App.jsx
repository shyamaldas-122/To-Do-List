import { useState } from 'react'

function App() {
  let [inputText, setinputText] = useState("");
  let [items, setItems] = useState([]);

  function inputHandel(event) {
    setinputText(event.target.value);
  }
  function addItems(event) {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setinputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputHandel} value={inputText} type="text" />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li> {item} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
