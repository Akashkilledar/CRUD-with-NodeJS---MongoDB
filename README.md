<p align="center">## Node.js CRUD App with MongoDB</p>

A simple CRUD (Create, Read, Update, Delete) application built using Node.js and MongoDB.

## Features
- Create, Read, Update, and Delete operations
- Express.js for handling routes
- MongoDB as the database
- Mongoose for database modeling

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Akashkilledar/CRUD-with-NodeJS---MongoDB.git
   cd CRUD-with-NodeJS---MongoDB
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
   
3. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

| Method | Endpoint       | Description        |
|--------|---------------|--------------------|
| GET    | /api/items    | Get all items     |
| GET    | /api/items/:id | Get single item  |
| POST   | /api/items    | Create an item   |
| PUT    | /api/items/:id | Update an item   |
| DELETE | /api/items/:id | Delete an item   |



