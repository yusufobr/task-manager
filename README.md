# Task Manager API

A simple CRUD API for managing tasks using Node.js, Express, MongoDB, and the MVC design pattern.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

This project is a basic Task Manager API that allows users to create, read, update, and delete tasks. Each task has a title and a completed status. The project is built using Node.js, Express, and MongoDB, following the MVC design pattern.

## Features

- Create a new task
- Retrieve all tasks
- Retrieve a task by ID
- Update a task by ID
- Delete a task by ID

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yusufobr/task-manager.git
   cd task-manager
   ```

2. Install the dependencies:
    ```bash
    npm install 
    ```

3. Start the server:
    ```bash
    npm start 
    ```

## API Endpoints

| Method         | Endpoint           | Description                           |
|---------------|---------------------|---------------------------------------|
| `GET`           | `/api/tasks`              | Get all tasks           |
| `POST`           | `/api/tasks`              | Create a new task         |
| `GET`           | `/api/tasks/:id`              | Get a task by ID         |
| `PUT`           | `/api/tasks/:id`              | Update a task by ID           |
| `DELETE`           | `/api/tasks/:id`              | Delete a task by ID          |


## Project Structure

    task-manager/
    │
    ├── controllers/
    │   └── taskController.js
    ├── models/
    │   └── taskModel.js
    ├── routes/
    │   └── taskRoutes.js
    ├── config/
    │   └── db.js
    ├── app.js
    └── package.json

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Body-parser
- CORS

    
## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.


## Contact
* Youssef OUBARI : yousarsif80@gmail.com
* Project Link: https://github.com/yusufobr/task-manager
