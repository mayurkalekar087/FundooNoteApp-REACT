import './App.scss';
import Login from "./pages/login/login";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
        </Switch>
  </Router>
  );
}
export default App;
