/* we can omit these as GraphQL can infer where the data comes from
*Link: {
id: root => root.id,
url: root => root.url,
description: root => parent.description,/*
 */

// postedBy on Link and links on User need to be explicitly implemented as GraphQL cannot infer where to get the data
// here we fetch the Link using the prisma client instance and then invoke postedBy on it.
// the resolver needs to be called postedBy because it resolves the postedBy field from the Link type in schema.graphql
function postedBy(root,args,context) {
  //
  return context.prisma.link({ id: root.id}).postedBy()
}

function votes(root,args,conext) {
  return context.prisma.link({ id: parent.id}).votes()
}

module.exports = {
  postedBy,
  votes,
};