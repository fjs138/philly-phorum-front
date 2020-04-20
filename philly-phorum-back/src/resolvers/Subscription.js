// subscriptions allow a server to send data to its clients when a specific event happens
// subscriptions are generally implemented with WebSockets
// subscriptions are steady connections, not request-response



// send realtime updates to subscribed clients when an existing Link element is upvoted

function newVoteSubscribe(root,args,context,info) {
  return context.prisma.$subscribe.vote({mutation_in: ['CREATED']}).node()

}
const newVote= {
  subscribe: newVoteSubscribe,
    resolve: payload => {
  return payload
    },
};


// send realtime updates to subscribed clients when a new Link element is created
function newLinkSubscribe(root,args,context,info) {
  return context.prisma.$subscribe.link({ mutation_in: ['CREATED']}).node()
}

const newLink = {
  subscribe: newLinkSubscribe,
    resolve: payload => {
    return payload
},
};

module.exports = {
  newLink,
  newVote,
};