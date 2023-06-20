# ejs-user_management-crud_application

## Description

This is a user management application developed using the ejs view engine amongst other technologies, with CRUD capabilities.

## Table of Contents

- [Technologies_Used](#technologies_used)
- [Install_and_Run](#install_and_run)
- [Usage](#usage)
- [Features](#features)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#licence)

## Technologies_Used

- `HTML`: HTML is used for structuring and presenting content.
- `CSS`: CSS is used for styling and layout of the web page.
- `javascript`: JavaScript is used for adding interactivity and behavior to the web page.
- `ejs`:  EJS (Embedded JavaScript) is a templating language that enables dynamic content generation on the server-side. It allows the embedding of JavaScript code within the HTML templates, making it easier to generate dynamic HTML content.
- `cors`: CORS (Cross-Origin Resource Sharing) is a mechanism that allows web browsers to make cross-origin requests securely. It is used to control access to resources (e.g., APIs) on different domains, ensuring proper security and preventing unauthorized access.
- `dotenv`: dotenv is a library that allows the loading of environment variables from a .env file into the application's environment. It is used in this development environment to manage sensitive configuration information, such as the API key.
- `express`: Express is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express is used to build the server-side of this application and handle routing, middleware support, and request/response.
- `nodemon`: Nodemon is a development tool that monitors changes in your Node.js applications and automatically restarts the server when files are modified.
- `axios`: Axios is a popular JavaScript library used for making HTTP requests from the browser or Node.js. It simplifies the process of sending asynchronous requests and handling responses.
- `morgan`: Morgan is a logging middleware for Node.js HTTP servers. It simplifies the process of logging HTTP requests and responses, including request method, URL, response status, and response time.
- `body-parser`: Body-parser is a Node.js middleware used to parse incoming request bodies in a middleware before the handlers. It extracts the entire body portion of an incoming request stream and exposes it on `req.body`.
- `mongoose`: Mongoose is an Object-Document Mapping (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction for connecting/interacting with MongoDB databases, allowing the definition of schemas, models, and perform database operations using a more intuitive API.
- `mongoDB`: MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It provides scalability, flexibility, and performance for handling large volumes of data and is commonly used for web applications and other data-intensive projects.

## Install

Step-by-step instructions on how to install and set up the project. Include any dependencies, libraries, or specific configurations required.

1. Clone the repository
```shell
$ git clone https://github.com/ra-im/ejs-user_management-crud_application.git
$ cd ejs-user_management-crud_application
```

2. Install the dependencies:
```shell
npm install
```

3. Configure the environment variables
- Create a `.env` file in the root directory of the application.
- Within the `.env` file, there are two variables, the `PORT` variable and the `MONGO_URI` variable.
- set `PORT=3000`, and `MONGO_URI=your_mongodb_api_key`.

4. Replace all urls in the `assets/js/index.js` and `server/services/render.js` files to `http://localhost:3000/api/users` (taking note of the `id` variables where indicated)

4. Start the application:
```shell
npm start
```

## Usage

- View the list of users.
- Update user details.
- Delete user accounts.
- Add new users by providing the necessary information.

## API Routes

- `'/'`: Home route/page
- `'/add-user'`: Add user
- `'/update-user'`: Update user

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the project.
2. Create a new branch.
3. Make your changes.
4. Commit and push your changes.
5. Create a pull request.

## License

This project is licensed under the [ISC](LICENSE).

## contact

Connect with me on [LinkedIn](https://www.linkedin.com/in/raheem-isaac/) and also on [Twitter](https://twitter.com/ra_im00?t=lWseaxeErEm0y9ZjyrdOOQ&s=03).
