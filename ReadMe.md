# Employee Database System

A web-based employee database system built using Node.js, Express, MongoDB, and Mongoose.

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Usage](#usage)
   - [API Endpoints](#api-endpoints)
4. [Contributing](#contributing)

## Installation

To run this project locally, you'll need to have the following installed:

- Node.js
- MongoDB

After cloning the repository, navigate to the project directory and install dependencies using npm:

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory of the project and provide the following environment variables:

```
MONGODB_URI=mongodb://localhost:27017/employees
PORT=3000
```

Replace `mongodb://localhost:27017/employees` with your local MongoDB connection string.

## Usage

Start the server using the following command:

```bash
npm start
```

### API Endpoints

#### Home Page API

- **GET /**
  - Description: Get the home page of the employee database system.
  - Response:
    - Status Code: 200 OK
    - Content: HTML content of the home page.

#### Add New Employee API

- **POST /employees/new**
  - Description: Add a new employee to the database.
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "designation": "Software Engineer",
      "salary": 50000
    }
    ```
  - Response:
    - Status Code: 200 OK
    - Content: `{ "message": "Employee added successfully" }`

#### See All Employee API

- **GET /employees/allemployee**
  - Description: Get a list of all employees in the database.
  - Response:
    - Status Code: 200 OK
    - Content: Array of employee objects.

#### Search Employee API

- **GET /employees/:id**
  - Description: Get details of a specific employee by ID.
  - Response:
    - Status Code: 200 OK
    - Content: Employee object.

#### Update Employee API

- **PUT /employees/:id**
  - Description: Update details of a specific employee by ID.
  - Request Body:
    ```json
    {
    "name":"sriram ravi",
    "designation":"vip",
    "salary":0
    }
    ```
  - Response:
    - Status Code: 200 OK
    - Content: `{ "message": "Employee updated successfully" }`

#### Delete Employee API

- **DELETE /employees/:id**
  - Description: Delete a specific employee by ID.
  - Response:
    - Status Code: 200 OK
    - Content: `{ "message": "Employee deleted successfully" }`

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.