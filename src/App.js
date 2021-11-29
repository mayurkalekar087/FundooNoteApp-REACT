import './App.scss';
import Login from "./pages/login/login";
import SignUp from "./pages/signUP/signUp"
import Forgot from "./pages/forgotPassword/forgotPassword";
import resetPassword from "./pages/resetPassword/resetPassword";
import {BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <Router>
  <div>
    <Switch>
      <Route path="/forgotPassword" component={Forgot} />
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/register" component={SignUp} />
      <Route path="/resetPassword" component={resetPassword} />
      <Route path="/" component={Login} />
    </Switch>
  </div>
  </Router>
);
}
export default App;
