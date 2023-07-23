import React, {useState} from "react";

export default function Search({searchTerm, updateSearch}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value = {searchTerm}
        placeholder="Type a name to search..."
        onChange={(e) => updateSearch(e.target.value)} // capture input with e.target.value
      />
    </div>
  );
}


