## The Goal
Create an online, social media and news focused site for Philadelphia, by Philadelphia, with no corporate/political ties or biases.

## Requirements
clean, minimal interface,

user accounts,

CRUD functionality,

up and down voting,

more to come..., will update soonTM.

## Tech Stack
Node, React, GraphQL, Apollo, Tachyons, Prisma

Node: asynchronous event-driven JavaScript runtime

React: A JavaScript library for building user interfaces

GraphQL: a query language for APIs and a runtime for fulfilling those queries with your existing data. 

Apollo: the industry-standard GraphQL implementation, providing the data graph layer that connects modern apps to the cloud.
        
Tachyons: Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible.

Prisma: an open source database toolkit. It replaces traditional ORMs and makes database access easy with an auto-generated and type-safe query builder for Node.js and TypeScript.


## Login
![Login](/login.gif)
## Search Posts
![Search Posts](/search.gif)
## Submit Post
![Submit Post](/submit.gif)
## Top Posts
![Top Posts](/top.gif)

## Under initial development, estimated release June 11th 2020.

I will be updating this description, as well as the code, over the coming days.

![Navbar early design](https://github.com/fjs138/philly-phorum-front/blob/master/navbar.png)

## Note
It seemed more appropriate to keep the front-end and back-end together in one repository, but they were developed independently and are not truly dependant on one-another.

philly-phorum-front is the react-apollo front-end

philly-phorum-back is the node local server back-end

Persistent storage and user authentication through the awesome [Prisma!](https://www.prisma.io/) service. Details to come...

## In progress
authentication,

live, persistent hosting and data storage,

security fixes,

branding changes

![GraphQL Playground screenshot](https://github.com/fjs138/philly-phorum-front/blob/master/gql-playground.png)


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
