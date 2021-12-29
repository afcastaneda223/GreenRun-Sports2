/* eslint-disable no-unused-vars */
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import bootstrap from 'bootstrap';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <h1>Hello from App</h1>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
