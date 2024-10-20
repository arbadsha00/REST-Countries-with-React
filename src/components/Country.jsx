const Country = ({ country }) => {
  console.log(country);
  return (
    <div>
      <div className="card card-compact bg-base-100 w-70 shadow-xl mx-auto">
        <figure className="w-70 h-40">
          <img
            className="w-full h-full object-cover"
            src={country.flags.png}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{country.name.common}</h2>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Going</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
