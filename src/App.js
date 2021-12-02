import './App.scss';
import Login from "./pages/login/login";
import SignUp from "./pages/signUP/signUp"
import Forgot from "./pages/forgotPassword/forgotPassword";
import resetPassword from "./pages/resetPassword/resetPassword";
import {BrowserRouter , Route,Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import ProtectedRoute from "../src/component/protectedRouter";
function App() {
  return (
    <BrowserRouter>
  <div>
    <Switch>
    <Route path='/login' component={Login}/>
      <Route path="/forgotPassword" component={Forgot} />
      <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
          ></ProtectedRoute>
      <Route path="/register" component={SignUp} />
      <Route path="/resetpassword/token" component={resetPassword} />
      <Route path="/" component={Login} />
    </Switch>
  </div>
  </BrowserRouter>
);
}
export default App;
