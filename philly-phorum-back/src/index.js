const { GraphQLServer } = require('graphql-yoga');
// the prisma client instance effectively lets you access your database through the prisma api
// it exposes a number of methods that let you perform CRUD operations for your models
const { prisma } = require('./generated/prisma-client');

// import the modules which now contain the resolvers
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');
const Vote = require('./resolvers/Vote');





// typeDefs defines GraphQL schema
// ! denotes that info can never be null
// refactored, moved schema to schema.graphql
// const typeDefs = ``


// dummy data for testing:
/*let links= [{
  id: 'link-0',
  url: 'www.youtube.com',
  description: 'Something, something, something.'
}];

// integer variable that serves as a way to generate unique IDs for newly created Link elements
let idCount = links.length
*/


// resolvers are a js object that mirrors the Query, Mutation, and Subscription types and their fields from the schema
// it is the implementation of the GraphQL schema
const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
};
  /*
  This has been refactored, here for posterity:
  Query: {
    info: () => `This is the API of philly-phorum`,
  },

  Mutation: {
    // root/parent, the result of the previous resolver call
    // args, for the url and description of the link to be created
    // context, a plain javascript object that every resolver in the resolver chain can read and write to
    // info contains the AST of the incoming GraphQL query
    post: (root, args, context) => {
      // sending the createLink method from the prisma client api
      return context.prisma.createLink({
        // as arguments, we're passing the data that the resolvers receive via the args parameter
        url: args.url,
        description: args.description,
      })




      // //  first creates a new link object,
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      // then adds it to the existing links list
      links.push(link);
      // finally, it returns the new link
      return link
    }

    },
  },
  // in this example we can actually omit the Link resolvers since they are trivial

  Link: {
    // in the second execution layer, the three link resolvers' incoming root / parent object
    // is the element inside the links list; root aka  parent
    id: (parent) => parent.id,
    url: (parent) => parent.url,
    description: (parent) => parent.description,
  }
};
*/

// the schema and resolvers are bundled and passed to the GraphQLServer, which is imported from graphql-yoga
// this tells the server what API operations are accepted and how they should be resolved
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  // we're accessing a request object on the context
  // instead of attaching an object directly, the context function returns the context, see EOF for details
  context: request => {
    return {
      ...request,
      prisma,
    }
  }
});

server.start(() => console.log(`The philly-phorum server is running on http://localhost:4000`));

/* The advantage of this approach is that we can attach the HTTP request that carries the incoming GraphQL query
(or mutation) to the context as well. This will allow your resolvers
to read the Authorization header and validate if the user who submitted the request is eligible to perform the requested operation.*/

