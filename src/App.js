import React, {useState, useEffect} from 'react';
import Landing from "./components/Landing";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Results from './components/Results/Results';
import AppRoute from './components/AppRoute';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


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
  return (
    <div>
      <BrowserRouter>
      <Landing/>
      <Navbar setSearch={setSearch}/>
      <AppRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
