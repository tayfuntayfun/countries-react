import React, {useState} from 'react';
import './App.css';
import data from './countries_data.json'
import CountryCard from './CountryCard';

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

  return (
    <div className="App">
      <div>
        <input type="text" 
             onChange={handleInputChange1}
             placeholder='Search for country' 
             style={{border: "2px solid blue", 
                     margin: '20px 20px', 
                    width: '150px',
                    padding: '10px'}}/>
        <input type="text" 
             onChange={handleInputChange2}
             placeholder='Search for capital city' 
             style={{border: "2px solid blue", 
                     margin: '20px 20px', 
                    width: '150px',
                    padding: '10px'}}/>
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
