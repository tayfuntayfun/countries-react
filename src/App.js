import React from 'react';
import './App.css';
import data from './countries_data.json'

function App() {
  
  return (
    <div className="App">
      {data.map((country) => (
          <div className='country-card'> 
          
            <img className='country-flag' src={country.flag}></img>
            <h1 >{country.name}</h1>

            <div className='country-info'>
              <p><b>Population:</b> {country.population}</p>
              <p><b>Region:</b> {country.region}</p>
              <p><b>Capital:</b> {country.capital}</p>
            </div>
          </div>
        ))
      }   
    </div>
  );
}

export default App;
