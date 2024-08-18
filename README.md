# Queue Management System

## Overview

The Queue Management System is a simple web application that allows users to manage and interact with message queues. Users can add messages to specific queues, retrieve messages from them, and monitor the current state of each queue. The application is built using a Node.js backend with Express for handling API requests and a React frontend to provide a user-friendly interface.

## Features

- **Add Messages**: Users can add messages to any queue.
- **Retrieve Messages**: Users can retrieve the next message from any queue with an optional timeout.
- **Monitor Queues**: Users can view the list of queues along with the number of messages in each queue.

## Project Structure

```
queue-management/
├── backend/
│   ├── controllers/
│   │   └── queueController.js
│   ├── routes/
│   │   └── queueRoutes.js
│   ├── services/
│   │   └── queueService.js
│   ├── index.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── AddMessage.jsx
    │   │   ├── QueueDetails.jsx
    │   │   └── QueueList.jsx
    │   │   ├── GlobalStyles.module.scss
    │   │   ├── AddMessage.module.scss
    │   │   ├── QueueDetails.module.scss
    │   │   └── QueueList.module.scss
    │   ├── App.jsx
    │   └── main.jsx
    ├── public/
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Setup Instructions

### Backend

1. **Navigate to the backend directory:**

   ```bash
   cd queue-management/backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the backend server:**

   ```bash
   npm run dev
   ```

   This will start the backend server using `nodemon`, which automatically restarts the server when file changes are detected. The server will run on `http://localhost:5000`.

### Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the frontend development server:**

   ```bash
   npm run dev
   ```

   This will start the Vite development server for the React frontend. The application will be accessible at `http://localhost:5173`.

## Usage

1. **Start the backend and frontend servers as described above.**

2. **Open the application in your browser:**

   Navigate to `http://localhost:5173` in your web browser.

3. **Interacting with the Application:**
   - **Viewing Queues**: The homepage will display the available queues and the number of messages in each.
   - **Adding a Message**: Select a queue to open the details view where you can add a message.
   - **Retrieving a Message**: Fetch the next message from the selected queue.

## API Endpoints

### `POST /api/{queue_name}`

- **Description:** Add a message to the specified queue.
- **Request Body:** JSON object representing the message (e.g., `{ "content": "This is a test message" }`).
- **Response:** A confirmation message indicating the message was added to the queue.

### `GET /api/{queue_name}?timeout={ms}`

- **Description:** Retrieve the next message from the specified queue.
- **Query Parameter:** `timeout` (optional) - The timeout in milliseconds to wait if the queue is empty.
- **Response:** The next message from the queue, or a `204 No Content` response if the timeout is reached.

### `GET /api/stats`

- **Description:** Retrieve statistics about all queues, including the number of messages in each.
- **Response:** An array of objects, each representing a queue with its name and message count.

## Troubleshooting

### Common Issues

- **Unexpected Response Format:**

  - If you see an "Unexpected response format" error, check the backend's API response format by querying the endpoints directly using Postman or curl.
  - Ensure that the backend returns an array of objects as expected by the frontend.

### Logs

- **Backend Logs:**

  - Monitor the backend server logs for detailed information on API requests and responses. Logs are printed to the terminal where the server is running.

- **Frontend Logs:**
  - Use the browser’s developer tools (F12) to view console logs and inspect network requests and responses.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact Info

maorkab@gmail.com
