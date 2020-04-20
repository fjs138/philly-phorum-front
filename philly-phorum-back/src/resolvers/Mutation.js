const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

async function signup(root, args, context, info) {
  // encrypting the User's password using bcryptjs
  const password = await bcrypt.hash(args.password, 10);
  // use the prisma client instance to store the new User in the database
  const user = await context.prisma.createUser({ ...args, password });
  // generating a jwt (json web token), which is signed with an APP_SECRET
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  // return the token and the user in an object that adheres to the AuthPayload object from the GraphQL schema
  return {
    token,
    user,
  };
}



  function post(root,args,context,info) {
    // retrieve the ID of the User
    // this ID is stored in the JWT that's set at the Authorization header of the incoming
    const userId = getUserId(context);
    // an unsuccessful retrieval of the userId leads to an exception in the utils.js getUserId function
    return context.prisma.createLink({
      url: args.url,
      description: args.description,
      // we use the userId to connect the Link to be created with the User who is creating it
      postedBy: { connect: { id: userId }},
    })
  }
async function login(root, args, context, info) {
  // using the prisma client instance to retrieve the existing User record by the email address
  // the email address is sent as an argument in the login mutation
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    // if no user with the specified email exists, return an error
    throw new Error("No such user found.");
  }
  // compare the provided password with the one that is stored in the database
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    // if the passwords don't match, return an error
    throw new Error("Invalid password.");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user,
  };
}

async function vote(root,args,context,info) {
  // validate the incoming JWT with the getUserId helper function
  // if it's valid the function will return the userId of the User who is making the request.
  const userId = getUserId(context);
  // the prisma client instance exposes CRUD methods for the models, as well as generates one $exists function per model
  // the $exists function takes a where filter object
  // args.linkId identifies whether a User has already voted for a Link
  const voteExists = await context.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId},
  });
  if (voteExists) {
    throw new Error('You\'ve already voted on this link')
  }
  // if exists returns false,
  // the createVote method will be used to create a new vote that's connected to the User and the Link
  return context.prisma.createVote({
    user: { connect: { id: userId}},
    link: { connect: { id: args.linkId }},
  })
}

module.exports = {
  signup,
  login,
  post,
  vote,
};
