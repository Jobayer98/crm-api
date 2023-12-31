# CRM RESTful API

## Overview

This project is a simple Customer Relationship Management (CRM) RESTful API designed to manage essential business entities, including employees, clients, projects, quotations, sales, expenses, and attendance. The API incorporates robust role-based authentication to secure access and maintain data integrity.

## Features

### 1. Role-Based Authentication

- Implemented role-based authentication for secure access to API endpoints.
- Differentiated roles for administrators, employees, and other user types.

### 2. Employee Management

- Created endpoints to manage employee information, including profiles and roles.
- Implemented CRUD operations for efficient employee data handling.

### 3. Client Management

- Developed functionalities to handle client details, including contact information and project associations.
- Enabled the addition, retrieval, and modification of client data.

### 4. Project Management

- Implemented features to manage projects, including creation, assignment, and status tracking.
- Associated projects with clients for seamless organization.

### 5. Quotation Management

- Designed endpoints to handle quotation creation, modification, and retrieval.
- Linked quotations with clients and projects for clear documentation.

### 6. Sales Tracking

- Implemented sales-related endpoints to record and manage transactions.
- Associated sales with clients and projects for comprehensive reporting.

### 7. Expense Tracking

- Developed functionalities to record and manage business expenses.
- Linked expenses with projects and employees for accurate financial tracking.

### 8. Attendance Tracking

- Created endpoints to handle attendance records for employees.
- Enabled the tracking of attendance by date and employee.

## Technologies Used

- **Express**: Utilized as the backend framework for handling HTTP requests and routing.
- **MongoDB**: Employed for data storage and retrieval.
- **JWT (JSON Web Tokens)**: Implemented for secure role-based authentication.
- **Mongoose**: Used for data modeling and interaction with the MongoDB database.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Configure environment variables.
4. Run the application using `npm start`.

## Usage

Explore the API documentation to understand available endpoints and request/response formats.

## Contributing

Feel free to contribute by submitting bug reports, feature requests, or pull requests.
