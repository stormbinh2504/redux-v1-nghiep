import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  render() {
    return (
      <Router>
        <div>
          <Menu></Menu>
          <div className="container">
            <div class="row">
              
              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
