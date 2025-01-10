# Client Management System

A web-based application for managing client data, including creating, reading, updating, deleting (CRUD) operations, and searching for clients.

## Features

- **CRUD Operations:** Create, read, update, and delete client records.
- **Search Functionality:** Filter clients by name, email, or job title.
- **Responsive UI:** Built with modern CSS frameworks.
- **Backend API:** Powered by Express and PostgreSQL.
- **Environment Variable Management:** Sensitive data is stored in a `.env` file, which is ignored by Git for security.

## Tech Stack

- **Frontend:** React, Axios, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Styling:** Tailwind CSS

## Installation

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/i-ayushh18/client-management-system.git
    ```
2. Navigate to the project directory:
    ```bash
    cd CRUD
    ```
    ```bash
    cd backend
    ```
3. Install backend dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add the following:(optional)
    ```env
    PG_USER=your_postgres_user
    PG_HOST=your_postgres_host
    PG_DATABASE=your_database_name
    PG_PASSWORD=your_password
    PG_PORT=your_postgres_port
    ```
5. Start the backend server:
    ```bash
    node index.js
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
```bash
    cd CRUD
    ```
    ```bash
    cd frontend
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to interact with the application.

## API Endpoints

- `GET /api/clients`: Fetch all clients.
- `POST /api/clients`: Create a new client.
- `PUT /api/clients/:id`: Update a client by ID.
- `DELETE /api/clients/:id`: Delete a client by ID.
- `GET /api/clients/search?q=searchTerm`: Search clients by name, email, or job.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
