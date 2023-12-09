import cities from 'cities-list'
import React, { useState } from 'react'
import { DebounceInput } from 'react-debounce-input';


const Debounce_input = () => {

    // const citiesArray=[Surat,vadodra,ahemdabad,mumbai]
    const [filteredCities, setFilteredCities] = useState([])
    const citiesArray = Object.keys(cities)

    const doCityFilter = query => {
        if (!query) return setFilteredCities([])
      
        setFilteredCities(citiesArray.filter(
          city => city.toLowerCase().includes(query.toLowerCase())
        ))
      }
      // console.log(filteredCities);
    return (
        <div><h3>Debounce input</h3>
            <DebounceInput
                className="px-2"
                placeholder="search here..."
                minLength={1}
                debounceTimeout={2000}
                onChange={event => (doCityFilter(event.target.value))}
            />
            <div>
        {filteredCities?.map((city, index) => (
          <p key={index}>{city}</p>
        ))}
      </div>
        </div>
    )
}



export default Debounce_input