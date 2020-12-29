import React from 'react';
import PropTypes from "prop-types";

function Food({ name }) {
  return <h1>i like {name + "ko"}</h1>
}

const foodIlike = [
  { id:1,name: "kimchi" },
  { id:2,name: "samgyeopsal" },
  { id:3,name: "Bibimbap" },
  { id:4,name: "Doncasu" },
  { id:5,name: "kimbap" }
]



function App() {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food name={dish.name}/>
      ))}
    </div>
  );
}

export default App;
