import React from 'react';
import './App.css';
import Home from './component/Home';
import Dataprovider from "./Context/Dataprovider";
import {Routes,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import MobRes from './component/MobRes';

function App() {
  return (

    <Dataprovider>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/result" element={<MobRes />} exact/>
    </Routes>
    </Dataprovider>
  );
}

export default App;
