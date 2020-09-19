import React from 'react';

function Food({name, picture}){
  return <div>
    <h2>I like {name}</h2>
    <img src = {picture} alt = {name} />
  </div>
}

const foodILike = [
  {
    id: 1,
    name: "pattbingsu",
    img: "https://www.koreanbapsang.com/wp-content/uploads/2020/07/DSC2381-500x500.jpg"
  },
  {
    id: 2,
    name: "kimchijeon",
    img: "https://www.koreanbapsang.com/wp-content/uploads/2010/02/DSC0780-2-500x500.jpg"
  },
  {
    id: 3,
    name: "spagetti",
    img: "https://www.koreanbapsang.com/wp-content/uploads/2020/04/DSC0488-1-500x500.jpg"
  }
];

function App() {
  return (
  <div>
    {foodILike.map(dish=>(
    <Food key = {dish.id} name = {dish.name} picture = {dish.img} />))};
  </div>
  );
    }

export default App;
