import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

// renders two Link components that users can use to navigate between the LinkList and CreateLink components
// this Link component here is not related to the main Link component
// this Link stems from the react-router-dom package and allows navigation between the routes inside the application
class Header extends Component {
  render() {
    return (
      <div className="flex pa1 justify-between nowrap green">
        <div className="flex flex-fixed white">
          <div className="fw7 mr1">Philly Phorum</div>
          <Link to="/" className="ml1 no-underline white">
            new
          </Link>
          <div className="ml1">|</div>
          <Link to="/create" className="ml1 no-underline white">
            submit
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
