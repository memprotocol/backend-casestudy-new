# Backend Project

### Welcome

Congratulations! We're really excited to welcome you to the next stage of our
process.

The rest of the interview process will be centered around the project hosted in
this repository. The goal of this project is to simulate what it is like to work
at Mem.

Here's how everything will play out from here:

1. You'll have a call with us to discuss the below objective. We'll scope out
   the PR together and define a set of tickets for you to complete. This is how
   our sprint planning works internally.
2. After the call, you'll work on the tickets we scoped. You'll be able to add
   new tickets and have access to a Mem engineer via a private Slack channel.
3. We'll circle back a week later for a second call to review your PR. We'll
   walk through your commits, ask some questions, and let you tell us what you
   would might do differently. This could be anything from implementing Rollbar
   for error tracing to transitioning to a different cloud environment. We want
   to hear your thoughts.

## Backend Coding Challenge

- You are tasked with creating some simple CRUD app in graphql, no frontend code
  is needed. You can use apollo sandbox to test the code (i.e
  localhost:4000/graphql)
- The app is very much like Quora (questions/answers/communities).
- We are currently using prisma for our db orm, but use whatever you like, just
  stick to postgresql.
- You dont need to write updates/deletes to the features, only implment the
  feture asked for or any helper methods if needed
- Although the functionality will be fairly straightforward please write
  production ready code, and feel free to ask questions on slack. We are here to
  help!

### Apollo Server

- The starting point for the code should be in `src/server.ts`
- create and attach an apollo server to the existing express server
  (apollo-server-express)
- structure the code how you think a production ready app should be.

### User/Auth

- a user schema in db already exists (prisma/schema.prisma), you may alter it as
  you wish, and use it as a template for the next features (if you wish to use
  prisma)
- create a simple user register/login endpoint using a username/password (no
  wallet integration needed)
- please use jwt

### Create Question

- a user can create question
- auth required: non auth users can not create a question

### Answer

- a create answer functionality (an answer is always associated with a question)
  (auth required)
- an endpoint to read all answers to a specific question (auth not required,
  everyone can read questions)

### Frontpage

- For the front page we want to get all the Questions and their associated
  answers in the front page, please create endpoint(s) to do this

### Communities:

- update a db schema (table(s)) to achive the following (no node code is
  required just prisma.schema or any schmea defenition)
- we just want to see how the db table(s) will look like with the following
  feature
- we want to eventually introduce communities. A community is like a subreddits,
  a community can have questions and members associated with it.

### Install node dependencies:

```
yarn install
```

### Setup DB

**Download Docker and Install**

- mac https://docs.docker.com/desktop/mac/install/
- make sure docker is running
- run command `docker compose up -d`
- run `docker ps` to make sure a postgresql db is listed as running

**alternatively, you may setup the db locally if you prefer, just use the
db/user/pass values specified in prisma/schema.prisma**

### 2. Creations and Migrations of database

To apply the migrations to your database

```
npx prisma migrate dev --name init
```

### 3. Start the server

Launch your server with this command:

```
yarn dev
```
