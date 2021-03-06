import React, { useState, useEffect } from "react";
import SearchComponent from "./components/SearchComponent";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import ArtistAlbums from "./pages/artistAlbums";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/artist/albums/">
          <ArtistAlbums />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
