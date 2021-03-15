import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import { SiteNav } from './siteNav'
import { Homepage } from './homepage'
import { Search } from './search'
import { Movie } from './movie'
import { Api } from './api'
import './App.css';

function App() {
  const [genres, setGenres] = useState([])

  useEffect(() => {
      Api.getGenres().then(json => setGenres(json.genres))
  }, []) 

  return (
    <div className="App bg-secondary">
      <SiteNav/>

      <div className="pageContent">
        <Switch>
          <Route exact path="/">
            <Homepage page={1} />
          </Route>
          <Route exact path="/cn-react-movie-app">
            <Homepage page={1} />
          </Route>
          <Route path="/search">
            <Search genres={genres} />
          </Route>
          <Route path="/movie/:id">
            <Movie genres={genres} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;