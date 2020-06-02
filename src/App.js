import React, {useState} from 'react';
import './App.css';
import data from './countries_data.json'
import CountryCard from './CountryCard';

function App() {
  const [country, setCountry] = useState(data)

  const handleInputChange = (e) => {
      const searchedCountry = e.target.value.toLowerCase();
      const filteredCountry = data.filter(item => item.name.toLowerCase().includes(searchedCountry))
      setCountry(filteredCountry)
  }

  return (
    <div className="App">
      <div>
        <input type="text" 
             onChange={handleInputChange}
             placeholder='Search for country' 
             style={{border: "2px solid blue", margin: '20px 20px'}}/>
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
