import React, {useState} from "react";

export default function NewPlantForm({addNewPlant}) {
  // use object state to handle form inputs 
  const [newPlant, setNewPlant] = useState ({
    name: '', 
    image: '', 
    price:0.00 
  })

  const handleChange = (e) => { 
    // target.name is always a string so need to convert to a number 
    // target.name name attribute of the form input that triggered the change in event ('name, image, price)
    let value = e.target.name === 'price' ? parseFloat(e.target.value) : e.target.value;
    
    setNewPlant({
      ...newPlant, 
      [e.target.name]: e.target.value // updates value of newplant
    })
  }
  

  const handleSubmit = async (e) => { 
    e.preventDefault()

    

    // Handles fetch request 
    try {
      const response = await fetch('http://localhost:6001/plants', { 
        method: 'POST', 
        headers: {
          "Content-Type": 'application/json',
        }, 
        body: JSON.stringify(newPlant)
      });
      
      // validates the response status 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }


      // reads response body, parses it to jason and assigns my plant to it 
      // wait is here to wait for the response.json promise to resolve 
      const myPlant = await response.json();
      addNewPlant(myPlant);

    } catch(error) {
      console.error('An error occurred while saving the plant:', error);
    }
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}


  // fetch('http://localhost:6001/plants', { 
  //     method: 'POST', 
  //     headers: {
  //       "Content-Type": 'application/json',
  //     }, 
  //     body: JSON.stringify(newPlant)
  //   }).then(r => r.json())
  //     .then(myPlant => addNewPlant(myPlant))
    
  // }
