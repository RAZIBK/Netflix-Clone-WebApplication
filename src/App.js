import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPoster from "./Components/RowPoster/RowPoster";
import {Action,Originals} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPoster url={Originals} title='Netflix Originals'/>
      <RowPoster url={Action} title='Action' isSmall />

    </div>
  );
}

export default App;
