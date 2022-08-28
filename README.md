# Installation Guide

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. ### `git clone <url>`
2. ### `npm install` (On backend and Frontend)

Create `.env` file on Nodejs_API folder

### Refer `.env_sample` for what .env should have (DB link from mongoDB ATLAS with password)

For setting up mongoDB and getting yourself a cluster, for all these steps refer to official docs [MongoDB & Mongoose](https://www.mongodb.com/docs/drivers/node/current/quick-start/).

### While on local you can use `nodemon app` to start your backend

#

# API Routes/endpoints

- A POST route “/api/pet” to add pets from an excel file
- A GET route “/api/pet” to get all the pets in the database
- A GET route “/api/pet/<petId>” to get a specific pet (petId will be a dynamic value eg. /api/pet/abc123)
- A PATCH route “/api/pet/<petId>” to update the details of a specific pet
- A DELETE route “/api/pet/<petId>” to delete a specific pet

### `(Use postman for playing about with Endpoints, much easier)`

## Tech Stacks: React.Js, Node.js, Express and MongoDB using mongoose
