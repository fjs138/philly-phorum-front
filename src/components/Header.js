import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AUTH_TOKEN } from '../constants'; // import the key definition

// renders two Link components that users can use to navigate between the LinkList and CreateLink components
// this Link component here is not related to the main Link component
// this Link stems from the react-router-dom package and allows navigation between the routes inside the application
class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN); // retrieve authToken from local storage
    return (
      <div className="flex pa1 justify-between nowrap green">
        <div className="flex flex-fixed white">
          <div className="fw7 mr1">Philly Phorum</div>
          <Link to="/" className="ml1 no-underline white">
            new
          </Link>
          <Link to="/top" className="ml1 no-underline white">
            top
          </Link>
          <div className="ml1">|</div>
          <Link to="/search" className="ml1 no-underline white">
            search
          </Link>
          {authToken && ( // if the authToken is not available, the submit button won't be rendered
            <div className="flex">
              <div className="ml1">|</div>
              <Link to="/create" className="ml1 no-underline white">
                submit
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer white"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                this.props.history.push(`/`);
              }}
            >
              logout
            </div>
          ) : ( // second button to the right of the Header that users can use to login and logout
            <Link to="/login" className="ml1 no-underline white">
              login
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
