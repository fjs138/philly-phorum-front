// a resolver must be named after the corresponding field from the schema definition
async function feed(root,args,context,info){ // root aka parent
  const where = args.filter ? {
    // if no filter string is provided, then the where object will be just an empty object and no filtering conditions
    // will be applied by the prisma engine when it returns the response for the links query
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter },
    ],
  }: {};
  // if there is a filter carried by the incoming args, a where object is constructed that expresses the two filter
  // conditions from above
  // i.e. the where argument is used by prisma to filter out Link elements that don't adhere to the specified conditions.
  const links = await context.prisma.links({
    where,
    // the invocation of the links query now receives additional arguments which may be carried by the incoming
    // args object
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });

  const count = await context.prisma.linksConnection({
    where,
// the linksConnection query from the Prisma client API retrieves the total number of Link elements currently stored
// in the database
  })
  .aggregate()
    .count()
  return {
    // links and count adhere to the Feed type defined in schema.graphql
    links,
    count,
  }
}

module.exports = { feed };