import React, {useState} from "react";

export default function NewPlantForm({addNewPlant}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0.00)


  // fetch('http://localhost:6001/plants', { 
  //     method: 'POST', 
  //     headers: {
  //       "Content-Type": 'application/json',
  //     }, 
  //     body: JSON.stringify(newPlant)
  //   }).then(r => r.json())
  //     .then(myPlant => addNewPlant(myPlant))
    
  // }

  const handleSubmit = async (e) => { 
    e.preventDefault()

    let newPlant = {
      name:name, 
      image:image,
      price:price
    }

    try {
      const response = await fetch('http://localhost:6001/plants', { 
        method: 'POST', 
        headers: {
          "Content-Type": 'application/json',
        }, 
        body: JSON.stringify(newPlant)
      });
      
      if (!response.ok) { // important bc returns http status code // fetch will resolve the promise even when a http error status is returned like (404 or 500)
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const myPlant = await response.json();
      addNewPlant(myPlant);
    } catch(error) {
      console.error('An error occurred while saving the plant:', error);
    }
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

} 