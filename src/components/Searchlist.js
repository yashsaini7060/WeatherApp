import React from 'react';

const Searchlist = ({ data, setLocationCoordinates, setSearchViewToggle }) => {
  const handleClick = () => {
    console.log("CONSOLING DATA")
    console.log(data)
    const newcoordinates = { lat: data.lat, lon: data.lon };
    console.log(newcoordinates)
    // setSearchViewToggle(false);
    setLocationCoordinates(newcoordinates);
  };

  return (
    <li className="view-item" onClick={handleClick}>
      <span className="m-icon">location_on</span>
      <div>
        <p className="item-title">{data?.name}</p>
        <p className="label-2 item-subtitle">{data?.state}, {data?.country}</p>
      </div>
      <a href="" className="item-link has-state" data-search-toggler></a>
    </li>
  );
};

export default Searchlist;