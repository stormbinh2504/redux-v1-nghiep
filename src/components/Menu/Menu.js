import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Quản lý sản phẩm",
    to: "/product-list",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}> {label}</Link>
          </li>
        );
      }}
    ></Route>
  );
};
class Menu extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <a className="navbar-brand">Title</a>
          <ul className="nav navbar-nav">
            {this.showMenu(menus)}
            {/* <li>
              <a>Trang chủ</a>
            </li>
            <li>
              <a>Danh sách sản phẩm</a>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menus.exact}
          ></MenuLink>
        );
      });
    }
    return result;
  };
}

export default Menu;
