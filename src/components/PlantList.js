import React from "react";
import PlantCard from "./PlantCard";

export default function PlantList({plants}) {
  return (
    <ul className="cards">{plants.map(plant => <PlantCard plant={plant} key={plant.key}/>)}</ul>
  );
}

