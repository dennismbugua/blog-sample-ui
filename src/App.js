import "./App.css";
import Topbar from "./components/topbar/topbar";
import Homepage from "./pages/homepage/homepage";
import Login from "./pages/login/login";
import Settings from "./pages/setting/settings";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./pages/register/register";

function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
