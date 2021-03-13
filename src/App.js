import { Switch, Route } from "react-router-dom";

import { SiteNav } from './siteNav'
import { Homepage } from './homepage'
import { Search } from './search'
import { Movie } from './movie'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
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
            <Search />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;