import Login from './Login'
import React, { Component } from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
// import logo from '../logo.svg'; // boilerplate, can/should remove
// import '../styles/App.css'; // boilerplate, can/should remove
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
