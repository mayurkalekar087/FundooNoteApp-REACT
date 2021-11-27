import './App.scss';
import Login from "./pages/login/login";
import SignUp from "./pages/signUP/signUp"
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login" component={Login} />
      <Route path="/SignUp" component={SignUp}/>
      <Route path="/" component={Login}/>
      </Switch>
  </Router>
  );
}
export default App;
