import './App.css';
import "./assets/styles/main.scss";
import Home from './pages/HomePage.jsx/HomePage';
import Login from './pages/Modal/Modal'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/registration" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
