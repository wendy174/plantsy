import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  const addNewPlant= (myPlant) =>  { 
    // setPlants([...plants, myPlant])
    console.log(myPlant)
  }
  

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addNewPlant={addNewPlant}/>
    </div>
  );
}

export default App;
