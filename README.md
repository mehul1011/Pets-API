# Installation Guide

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. ### `git clone <url>`
2. ### `npm install` (On backend and Frontend)
3. Goto PETS-API/Client/excel-reader and do `npm install` and PETS-API/Server and do `npm install`

4. Rename `.env_sample` to `.env` and place your DB_LINK containing password (from MongoDB atlas)

5. For setting up mongoDB and getting yourself a cluster, for all these steps refer to official docs [MongoDB & Mongoose](https://www.mongodb.com/docs/drivers/node/current/quick-start/).

- ### While on local you can use `nodemon app` to start your backend by going into PETS-API/Server

- ### Also start your frontend by going into PETS-API/Client/excel-reader and doing `npm start`

# API Routes/endpoints

- A POST route “/api/pet” to add pets from an excel file

1. Here you would require to upload an `excel sheet` and with following data in the columns

- Name
- Type
- Breed
- Age

- A GET route “/api/pet” to get all the pets in the database

1. Make sure you are connected to DB using your Key provided by mongoDB cluster

- A GET route “/api/pet/<petId>” to get a specific pet (petId will be a dynamic value eg. /api/pet/abc123)

---

- `<petId>` is the \_id from mongoDB server it will always be unique.
  Ex: `http://localhost:3000/api/pet/630b86cc733f524d52f5224d`

- A PATCH route “/api/pet/<petId>” to update the details of a specific pet.

1. please provide json in the req body while making the request, the changed/updated things can be viewed by again making a get request.
   `http://localhost:3000/api/pet/630b86cc733f524d52f5224d`
   Ex: body:
   {
   "name": "Happu",
   "type": "Male",
   "breed": "Pug",
   "Age": 110
   }

---

- A DELETE route “/api/pet/<petId>” to delete a specific pet
  Ex: `http://localhost:3000/api/pet/630b86cc733f524d52f5224d`

---

### `(Use postman for playing about with Endpoints, much easier)`

## Tech Stacks: React.Js, Node.js, Express and MongoDB using mongoose
