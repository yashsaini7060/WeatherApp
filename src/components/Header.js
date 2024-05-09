import React, { useState } from 'react'
import Search from './Search';
import logo from "../assets/images/logo.png";
import Searchlist from './Searchlist';
function Header({ setLocationCoordinates }) {

  const [searchViewActive, setSearchViewActive] = useState(false);

  //Storing search locations
  const [searchLocations, setLocations] = useState();

  const setSearchViewToggle = () => {
    setSearchViewActive(false);
  }

  const setSearchLocations = (locations) => {
    setLocations(locations.data);
  }

  return (
    <header className="header" >
      <div className="container">
        <a href="./" className="logo">
          <img
            src={logo}
            width="364"
            height="58"
            alt="logo"
          />
        </a>

        <div className={searchViewActive ? "search-view active" : "search-view"} data-search-view>
          <div className="search-wrapper">

            <Search setSearchLocations={setSearchLocations} />

            <span className="m-icon leading-icon">search</span>

            <button
              className="icon-btn leading-icon has-state"
              arial-label="close search"
              data-search-toggler
              onClick={() => { setSearchViewActive(false) }}
            >
              <span className="m-icon">arrow_back</span>
            </button>
          </div>

          <div className={`search-result ${searchLocations?.length > 0 ? 'active' : ''}`} data-search-result>
            <ul className="view-list" data-search-list>
              {/* {searchLocations && searchLocations.map((data, index) => {
                return <Searchlist data={data}  setLocationCoordinates={setLocationCoordinates} setSearchViewToggle={setSearchViewToggle} />
              })} */}
              {searchLocations && searchLocations.map((data, index) => {
                return <Searchlist key={index} data={data} setLocationCoordinates={setLocationCoordinates} setSearchViewToggle={setSearchViewToggle} />
              })}

            </ul>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="icon-btn has-state"
            arial-label="open search"
            data-search-toggler
            onClick={() => { setSearchViewActive(true) }}
          >
            <span className="m-icon icon">search</span>
          </button>
          <a
            href="#/current-location"
            className="btn-primary has-state"
            data-current-location-btn
          >
            <span className="m-icon">my_location</span>
            <span className="span">Current Location</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header