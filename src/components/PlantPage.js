import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

export default function PlantPage({plants, addNewPlant}) {
  return (
    <main>
      <NewPlantForm addNewPlant= {addNewPlant}/>
      <Search />
      <PlantList plants ={plants}/>
    </main>
  );
}


