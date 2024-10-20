import { useState } from "react";

const Country = ({ country,handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
    function handleVisited(country) {
        handleVisitedCountries(country);
    setVisited(!visited);
  }
  return (
    <div>
      <div className="card card-compact bg-base-100 w-72 shadow-xl mx-auto">
        <figure className=" w-72 h-40">
          <img
            className="w-full h-full object-cover"
            src={country.flags.png}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{country.name.common}</h2>

          <div className="card-actions justify-end">
                      <button className={`btn btn-primary ${visited ? "bg-green-500 border-none" : ""}`} onClick={() => {
                          handleVisited(country)
            }} >
              {visited ?"Visited":"Going" }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
