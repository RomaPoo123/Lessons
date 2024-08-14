import React from 'react';
import './App.css';
import { MicroTasks } from './microtasks/MicroTasks';
import { OnnOff } from './06-useState/06';
import { User } from './07-callBack/07';
import { ManComponent } from './08-destructuring-assignment/Destructuring';

function App() {
  let man = {
    name: "Roman",
    age: 27,
    lessons: [
      {
        number: 1,
        title: "HTML"
      },
      {
        number: 2,
        title: "CSS"
      },
      {
        number: 3,
        title: "JavaScript"
      },
    ],
    address: {
      street: {
        number: 125,
        title: "street world"
      }
    }
  }
  return (
    <div className="App">
      {/* <MicroTasks /> */}
      {/* <OnnOff /> */}
      {/* <User /> */}
      <ManComponent title={"new User"} man={man} food={
        ["milk", "banana"]} car={{ model: "BMW" }}
      />
    </div>
  );
}

export default App;
