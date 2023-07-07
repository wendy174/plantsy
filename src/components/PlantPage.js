import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

export default function PlantPage({plants, addNewPlant, updateSearch, searchTerm}) {
  return (
    <main>
      <NewPlantForm addNewPlant= {addNewPlant}/>
      <Search updateSearch={updateSearch} searchTerm={searchTerm}/>
      <PlantList plants ={plants}/>
    </main>
  );
}


