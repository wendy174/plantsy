import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants}) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants ={plants}/>
    </main>
  );
}

export default PlantPage;
