import './App.scss';
import Login from "./pages/login/login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      {/* <Login />*/}
        <Route path="/login">
          <Login />
        </Route>
    </div>
  </Router>
  );
}
export default App;
