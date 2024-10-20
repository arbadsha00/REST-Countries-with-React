 import "./App.css";
import Countries from "./components/Countries";


function App() {
  return (
    <>
      <div className="container mx-auto ">
        <h1 className="font-bold text-4xl text-center">All Countries</h1>
        <div className="divider"></div>
       
        <Countries></Countries>
      </div>
    </>
  );
}

export default App;
