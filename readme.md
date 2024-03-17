# Web - EX10 - User Login Application

This project is a simple user login application built with Node.js, Express, and SQLite. It demonstrates how to create a login system where users can log in using their credentials. The application includes a login page and a main page that displays a user table, accessible only to logged-in users.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TomerMeidan/web-ex10.git
   ```

2. Navigate to the project directory:

   ```bash
   cd web-ex10
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   node app.js
   ```

The application will start, and you can access it at `http://localhost:3000/login`.

## Usage

### Logging In

- Navigate to `http://localhost:3000/login`.
- Enter a username and password.
- Click the "Login" button.

If the credentials match one of the predefined users, you will be redirected to the main page.

### Main Page

- Once logged in, you can view the user table on the main page.
- The main page is accessible only to logged-in users.

### Logging Out

- To log out, click the "Logout" link on the main page.

## Predefined Users

The application includes a set of predefined users for demonstration purposes. These users are created in the SQLite database upon the first run of the application. The users and their passwords are as follows:

- **Username**: user1, **Password**: password1
- **Username**: user2, **Password**: password2
- **Username**: user3, **Password**: password3