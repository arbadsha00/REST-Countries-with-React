const VisitedCountry = ({visitedCountry}) => {
  return (
    <div className="flex items-center gap-2">
          <div className="w-8">
              <img src={visitedCountry.flags.png} alt="" />
      </div>
      
          <h1 className="font-semibold text-xl">{visitedCountry.name.common }</h1>
    </div>
  );
};

export default VisitedCountry;
