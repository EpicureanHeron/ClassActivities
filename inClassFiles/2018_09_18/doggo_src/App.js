import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";


const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/Discover" component={Discover} />
      <Route exact path="/Home" component={Home} />
      <Route path="/Search" component={Search} />
    </div>
  </Router>
);

export default App;
