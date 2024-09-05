import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  //1 Run on every render
  useEffect(() => {
    alert('Every Render Call')
  })
  
  // let callData = () => {
  //   alert("Call")
  // }

  //2 Run only one time
  useEffect(() => {
    alert('Render Call only one Time')
  },[])

  //3 Run When Update Pericular Data 
  let [counter,updateCounter] = useState(0)
  let updateData = () => {
    updateCounter(counter+1)
  }
  useEffect(() => {
    alert('Call When Counter Update')
  },[counter])

  return (
    <div className="App">
      {counter}
      <button>Click</button>
      <button onClick={updateData}>Counter</button>
    </div>
  );
}

export default App;
