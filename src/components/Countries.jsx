import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import VisitedCountries from "./VisitedCountries";
import VisitedCountry from "./VisitedCountry";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

    const [visitedCountries, setVisitedCountries] = useState([]);
    function handleVisitedCountries(visitedCountry) {
        if (visitedCountries.includes(visitedCountry) == 0) {
            const newArray = [...visitedCountries, visitedCountry];
        setVisitedCountries(newArray);
        }
        else {
            setVisitedCountries(visitedCountries.filter(country => country !== visitedCountry));
        }
        
    }

  return (
      <>
          <VisitedCountries visitedCountries={visitedCountries} ></VisitedCountries>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 ">
        {countries.map((country) => (
          <Country key={country.ccn3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
