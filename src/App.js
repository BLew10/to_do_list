import './App.css';
import ToDo from './components/ToDo';
import AddItemForm from './components/AddItemForm';
import React, { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])

  const addItem = (item) => {
    setToDos([item, ...toDos])
  }
  const deleteItem = (targetItem) => {
    setToDos(toDos.filter(item => item !== targetItem ))
}
  
  return (
    <div className="App">
      <AddItemForm addItem={addItem} />
      <ToDo list={toDos} deleteItem ={deleteItem}/>
    </div>
  );
}

export default App;
