## Philly Phorum
Social news aggregator powered by React, GraphQL, Apollo


## The Goal
Create an online, social media and news focused site for Philadelphia, by Philadelphia, with no corporate/political ties or biases.

## Technology Stack


| Technology    	| Use           	  | Description     										  |
| :------------------|:-------------------| :----------------										  |
| Node 			| Server     | Server-side, asynchronous event-driven JavaScript runtime				  |
| React			| Front-end			  |	JavaScript library for building user interfaces            |
| GraphQL			| data manipulation			  |	a query language for APIs and a runtime for fulfilling those queries with your existing data.          |
| Apollo			| js client for gql			  |	the industry-standard GraphQL implementation, providing the data graph layer that connects modern apps to the cloud.          |
| Tachyons			| css			  |	Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible.          |
| Prisma			| data storage			  |	an open source database toolkit. It replaces traditional ORMs and makes database access easy with an auto-generated and type-safe query builder for Node.js and TypeScript.          |


## Project Specifications

clean, minimal interface,

user accounts,

CRUD functionality,

voting on posts,

## Anatomy of Project


| File/Folder    	| Purpose           	  |
| :------------------|:-------------------|
| / | frontend |
| src/components/	 			| React components     |
| philly-phorum-back/		 			| backend|
| philly-phorum-back/prisma		 			| Prisma configuration    |


## Routes
| path       |component|
| :------------------ |:-------------------         									  |
|/create |    CreateLink  |
|/login |    Login  |
|/search |    Search  |
|/top |    LinkList  |
|/new/:page |    LinkList  |

## Login
![Login](/login.gif)
## Search Posts
![Search Posts](/search.gif)
## Submit Post
![Submit Post](/submit.gif)
## Top Posts
![Top Posts](/top.gif)


![Navbar early design](https://github.com/fjs138/philly-phorum-front/blob/master/navbar.png)

## Note
It seemed more appropriate to keep the front-end and back-end together in one repository, but they were developed independently and are not truly dependant on one-another.

philly-phorum-front is the react-apollo front-end

philly-phorum-back is the node local server back-end

Persistent storage and user authentication through the awesome [Prisma](https://www.prisma.io/) service.


![GraphQL Playground screenshot](https://github.com/fjs138/philly-phorum-front/blob/master/gql-playground.png)


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## License
MIT License

Copyright (c) 2015 Frank Santaguida

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
