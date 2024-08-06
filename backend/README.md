# Backend API README

## Overview

This backend API is built using Node.js, Express, and SQL for managing quizzes and user data. This README provides instructions on how to set up and run the backend server.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 14.x or later recommended). You can download it from [Node.js official website](https://nodejs.org/).
- **MySQL**: You will need MySQL. You can download it from [MySQL official website](https://dev.mysql.com/downloads/).

## Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**

   Run the following command to install the required Node.js packages:

   ```bash
   npm install
   ```

3. **Set Up the Database**

   - Create a new MySQL database. You can use a database management tool, MySQL Workbench, or run the following command in the MySQL command line:

     ```sql
     CREATE DATABASE quiz_app;
     ```

   - Import the provided SQL schema to create the necessary tables:

     ```sql
     -- Create 'users' table
     CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );

     -- Create 'mcqs' table
     CREATE TABLE mcqs (
       id INT AUTO_INCREMENT PRIMARY KEY,
       question TEXT NOT NULL,
       answer VARCHAR(255) NOT NULL,
       hint TEXT,
       optionA VARCHAR(255),
       optionB VARCHAR(255),
       optionC VARCHAR(255),
       optionD VARCHAR(255)
     );

     -- Create 'quizzes' table
     CREATE TABLE quizzes (
       id INT AUTO_INCREMENT PRIMARY KEY,
       user_id INT NOT NULL,
       score INT NOT NULL,
       submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (user_id) REFERENCES users(id)
     );
     ```

4. **Configure Environment Variables**

   Create a `.env` file in the root directory of the project and add the following environment variables:

   ```env
   PORT=5001
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=quiz_app
   ```

   Replace `your_mysql_password` with your actual MySQL password.

## Running the Server

Run the following command to start the server:

```bash
npm run dev
```

By default, the server will run on [http://localhost:5001](http://localhost:5001).