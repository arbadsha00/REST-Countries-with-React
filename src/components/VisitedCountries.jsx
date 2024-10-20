import VisitedCountry from "./VisitedCountry";


const VisitedCountries = ({ visitedCountries }) => {
    console.log(visitedCountries);
  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold ">Visited Countries :</h1>
      <div className="bg-gray-300 rounded-xl p-5">
              {
                 visitedCountries.map(visitedCountry=><VisitedCountry key={visitedCountry.ccn3} visitedCountry={visitedCountry}></VisitedCountry>)
     }
      </div>
    </div>
  );
};

export default VisitedCountries;
