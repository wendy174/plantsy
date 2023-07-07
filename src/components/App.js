import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


export default function App() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:6001/plants")
  //     .then((r) => r.json())
  //     .then(setPlants);
  // }, []);
  //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6001/plants");
        const plantsData = await response.json();
        setPlants(plantsData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  //

  const addNewPlant= (myPlant) =>  { 
    setPlants([...plants, myPlant])
  }

  const updateSearch = (searchInput) => { 
    setSearchTerm(searchInput)
  }
  

  return (
    <div className="app">
      <Header  />
      <PlantPage updateSearch={updateSearch} searchTerm = {searchTerm} plants={plants} addNewPlant={addNewPlant}/>
    </div>
  );
}

