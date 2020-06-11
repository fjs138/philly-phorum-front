/*
1. write the mutation as a JavaScript constant using the gql parser function
2. use the <Mutation /> component passing the GraphQL mutation and variables (if needed) as props
3. use the mutation function that gets injected into the component’s render prop function
 */
import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { FEED_QUERY } from './LinkList'
import { LINKS_PER_PAGE } from '../constants'
// stores the mutation

const POST_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
            id
            createdAt
            url
            description
        }
    }
`

class CreateLink extends Component {
  state = {
    description: '',
    url: '',
  }

  render() {
    const { description, url } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ description, url }}
          // After the mutation is performed, react-router-dom will now navigate back to the LinkList component
          onCompleted={() => this.props.history.push('/new/1')}
          update={(store, { data: { post } }) => {
            const first = LINKS_PER_PAGE
            const skip = 0
            const orderBy = 'createdAt_DESC'
            const data = store.readQuery({
              query: FEED_QUERY,
              variables: { first, skip, orderBy },
            })
            data.feed.links.unshift(post)
            store.writeQuery({
              query: FEED_QUERY,
              data,
              variables: { first, skip, orderBy },
            })
          }}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateLink