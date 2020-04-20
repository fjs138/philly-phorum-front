import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// You’re importing the required dependencies from the installed packages.
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Here you create the httpLink that will connect your ApolloClient instance with the GraphQL API,
// your GraphQL server will be running on http://localhost:4000.
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

// Now you instantiate ApolloClient by passing in the httpLink and a new instance of an InMemoryCache.
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// Finally you render the root component of your React app. The App is wrapped with the higher-order component
// ApolloProvider that gets passed the client as a prop.
ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
