import React, { useState, useEffect } from 'react';
import { featchInputResult } from '../helper/inputResult';

function Search({setSearchLocations}) {

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    event.preventDefault()
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const data = await featchInputResult(inputValue);
      if(data.status!=="error"){  
      setSearchLocations(data);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue, setSearchLocations]);




  return (
    <input
      type="search"
      name="search"
      placeholder="Search city..."
      className="search-field searching"
      data-search-field
      value={inputValue}
      onChange={handleInputChange}
    />
  )
}

export default Search;