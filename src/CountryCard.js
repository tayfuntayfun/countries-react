import React from 'react';

const CountryCard = (props) => {

    return (
        <div className='country-card'> 
        
          <img className='country-flag' src={props.country.flag} alt='current sketch'></img>
          <h1 >{props.country.name}</h1>

          <div className='country-info'>
            <p><b>Population:</b> {props.country.population}</p>
            <p><b>Region:</b> {props.country.region}</p>
            <p><b>Capital:</b> {props.country.capital}</p>
          </div>
        </div>
    )

}

export default CountryCard;
