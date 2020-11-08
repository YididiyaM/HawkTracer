//React core 
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



// Components
import HomePage from "./Components/Templates/HomePage";
import ResultsPage from "./Components/Templates/ResultsPage";
import AllPackages from "./Components/Templates/AllPackages";

import Packages from "./Components/Organisms/List";
import Package from "./Components/Organisms/Package";


 function App() {
  const information = Packages();
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component ={HomePage}/>  
            <Route path="/ResultsPage/:query">
              <ResultsPage information={information}/>
            </Route>
            <Route path="/allpackages">
                   <AllPackages information={information}/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
