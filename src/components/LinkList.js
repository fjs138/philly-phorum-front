import React, { Component } from 'react';
import Link from './Link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// for data fetching, we write the query as a js constant, using the gql parser function
const FEED_QUERY = gql`
    {
        feed {
            links {
                id
                createdAt
                url
                description
            }
        }
    }
`

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          // loading: is true as long as the request is still ongoing and the response hasn't been received
          if (loading) return <div>Fetching</div>
          // error: if the request fails, this field will contain information about what went wrong
          if (error) return <div>Error</div>
          // data: this is the actual data that was received from the server.
          // It has the links property which represents a list of Link elements.
          const linksToRender = data.feed.links

          return (
            <div>
              {linksToRender.map(link => <Link key={link.id} link={link} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList

