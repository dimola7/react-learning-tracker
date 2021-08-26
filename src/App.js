import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './pages/Login/Login';
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
