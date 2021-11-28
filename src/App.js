import './App.scss';
import Login from "./pages/login/login";
import SignUp from "./pages/signUP/signUp"
import Forgot from "./pages/forgotPassword/forgotPassword";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
  <Router>
  <div>
    <Switch>
    <Route path="/forgotPassword">
            <Forgot />
          </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/register">
        <SignUp />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </div>
</Router>
);
}
export default App;
