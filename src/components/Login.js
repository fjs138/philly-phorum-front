import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants";
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

// these two mutators take arguments and return the token that you can attach to subsequent requests
// to authenticate the user, which will indicate that a request is made on behalf of that user

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: "",
    password: "",
    name: "",
  };

  // 1st state is for users that already have accounts, who can login.
  // the component renders two input fields: email and password. the state.login will be true in this case.

  // 2nd state is for new users without accounts, who need to create one before logging in.
  // the component renders three input fields: email, password, and name. the state.login will be false in this case.

  render() {
    const { login, email, password, name } = this.state;
    return (
      <div>
        <h4 className="mv3">{login ? "Login" : "Sign Up"}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
          <Mutation
            // If the user wants only to login, we call the loginMutation,
            // otherwise the signupMutation is used, and the mutation will be triggered on the div’s onClick event

            // GraphQL mutations receive the email, password and name state values as params,
            // passed on the variables prop

            // finally, after the mutation has finished, we call the _confirm function,
            // passing the data returned by the mutation as an argument.
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={data => this._confirm(data)}
          >
            {mutation => (
              <div className="pointer mr2 button" onClick={mutation}>
                {login ? 'login' : 'create account'}
              </div>
            )}
          </Mutation>
          <div
            className="pointer button"
            onClick={() => this.setState({ login: !login })}
          >
            {login ? "need to create an account?" : "already have an account?"}
          </div>
        </div>
      </div>
    );
  }

  // the method _confirm will be used to implement the mutations that we need to send for the login functionality

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup;
    this._saveUserData(token);
    this.props.history.push('/')
  }

  // after the mutation is performed, we store the returned token in localStorage and navigate back to the root route

  // mutation returned data relies on the GraphQL mutation definition

  _saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;
