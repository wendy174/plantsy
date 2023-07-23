import React, {useState} from "react";

export default function PlantCard({plant}) {
  const [isInStock, setIsInStock] = useState(true)

  const handleStock = () => { 
    setIsInStock(!isInStock)
  }


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick = {handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick = {handleStock} >Out of Stock</button>
      )}
    </li>
  );
}


