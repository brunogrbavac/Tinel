import React from "react";
import Layout from "./Modules/Layout/Layout";
import Workshops from "./Pages/Workshops/Workshops";
import Workshop from "./Pages/Workshop/Workshop";
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/workshops" element={<Workshops/>}/>  
          <Route path="/workshop/:id" element={<Workshop/>}/>
          <Route path="*" element={<Workshops/>}/>
        </Routes>
        </Layout>
    </div>
  );
};

export default App;