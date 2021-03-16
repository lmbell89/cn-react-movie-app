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
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useState({
      searchType: "detailed",
      sort: "popularity",
      minRating: 7.5,
      minVotes: 200
  })

  useEffect(() => {
      Api.getGenres().then(json => setGenres(json.genres))
  }, [])

  const handleParams = (params) => {
    setSearchParams(params)
    setCurrentPage(1)
  }

  return (
    <div className="App bg-secondary">
      <SiteNav handleParams={handleParams} />

      <div className="pageContent">
        <Switch>

          <Route path="/search">
            <Search 
              genres={genres} 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage} 
              searchParams={searchParams} 
              handleParams={handleParams}
            />
          </Route>

          <Route path="/movie/:id">
            <Movie />
          </Route>

          <Route path="/">
            <Homepage 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage} 
              searchParams={searchParams} 
              handleParams={handleParams} 
            />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App