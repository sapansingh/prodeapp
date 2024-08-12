import React, { useState } from 'react';
const items = [  { "name": "Dashboard","to":"/" },{ "name": "Analytics","to":"/Analytics/Assignment"},
    { "name": "Penalty Deshbord", "to":"/penalty"},
    { "name": "Assets Master","to":"/Assetsmaster"},
    { "name": 'It Admin',"to":"/admin"},
    { "name": 'Merit Triggers',"to":"/meritalerts"},
    { "name": "Call Recordings","to":"/callrecording"},
    { "name": "Reports","to":"/re"}]
const ItemList = ({ selectedCategories }) => {
  // Filter items based on selectedCategories array
  const filteredItems = items.filter(item =>
    selectedCategories.includes(item.name)
  );

  console.log(filteredItems);

  // Map filtered items to JSX elements
  const itemElements = filteredItems.map(item => (
    <li key={item.id}>
      {item.name} ({item.name})
    </li>
  ));

  return (
    <div>
      <h1>Filtered Items</h1>
      <ul>
        {itemElements}
      </ul>
    </div>
  );
};

const Test = () => {
  // Define selected categories to filter
  const [selectedCategories, setSelectedCategories] = useState(['Electronics']);

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(value)) {
        return prevCategories.filter(category => category !== value);
      } else {
        return [...prevCategories, value];
      }
    });
  };

  return (
    <div>
      <h1>Select Categories</h1>
      <label>
        <input
          type="checkbox"
          value="Penalty Deshbord"
          checked={selectedCategories.includes('Penalty Deshbord')}
          onChange={handleCategoryChange}
        />
       Penalty Deshbord
      </label>
      <label>
        <input
          type="checkbox"
          value="Dashboard"
          checked={selectedCategories.includes('Dashboard')}
          onChange={handleCategoryChange}
        />
      Dashboard
      </label>
      <ItemList selectedCategories={selectedCategories} />
    </div>
  );
};

export default Test;
