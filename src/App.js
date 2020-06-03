import React, {useState} from 'react';
import './App.css';
import data from './countries_data.json'
import CountryCard from './CountryCard';
import NavBar from './Navbar'

function App() {
  const [country, setCountry] = useState(data)

  const handleInputChange1 = (e) => {
      const searchedCountry = e.target.value.toLowerCase();
      const filteredCountry = data.filter(item => item.name.toLowerCase().includes(searchedCountry))
      setCountry(filteredCountry)
  }

  const handleInputChange2 = (e) => {
    const searchedCity = e.target.value.toLowerCase();
    const filteredCountryByCity = data.filter(item => item.capital.toLowerCase().includes(searchedCity))
    setCountry(filteredCountryByCity)
}

let filteredRegions = data.map((a) => a.region)
let filtered = [...new Set(filteredRegions)]
console.log(filtered)

  return (
    <div className="root">
      <NavBar />
      <div className='searchCountry'>
        <input type="text" className='country-input' 
             onChange={handleInputChange1}
             placeholder='Search for country' 
             />
        <input type="text" className='country-input' 
             onChange={handleInputChange2}
             placeholder='Search for capital city' 
             />
        <select name="" id="region-search" className="select-box">
          <option value=""> All regions</option>
          {filtered.map((region) => {
              return region.length > 0 && <option value={region}> {region} </option>
          })
          } 
          
        </select>
      </div>
      <div className='app-body'>
        {country.map((country) => (
          <CountryCard country={country}/> 
        ))
      }  
      </div>
    </div>
  );
}

export default App;
