//React core 
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Styling
import './Style/App.css';

// Components
import HomePage from "./Components/Templates/HomePage";
import ResultsPage from "./Components/Templates/ResultsPage";
import AllPackages from "./Components/Templates/AllPackages"


 function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route path="/" exact component ={HomePage}/>  
          <Route path="/search" exact component ={ResultsPage}/>
          <Route path="/allpackages" exact component ={AllPackages}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
