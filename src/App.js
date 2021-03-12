import { Switch, Route } from "react-router-dom";

import { Navbar } from './navbar'
import { Homepage } from './homepage'
import { Search } from './search'
import { Movie } from './movie'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="pageContent">
        <Switch>
          <Route exact path="/">
            <Homepage page={1} />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;