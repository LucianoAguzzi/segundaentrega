import React, {useState, useEffect} from 'react';
import Landing from "./components/Landing";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Results from './components/Results/Results';
import AppRoute from './components/AppRoute';
import cartContext from './Context/cartContext'

function App() {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  useEffect(()=>{
    if(search != ""){
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
    .then((res)=> res.json())
    .then((data)=>setResults(data.results))
}
}, [search])
console.log(results)
  return (
    <div>
      <cartContext.Provider value={[]}/>
      <BrowserRouter>
      <Landing/>
      <Navbar setSearch={setSearch}/>
      <AppRoute/>
      <Results results={results}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
