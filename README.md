### Notification Service Project

This project is a notification service that allows users to send notifications of different types (SMS, Email, Push Notifications) and view the logs of these notifications. The service is built with React for the frontend and Node.js with Express for the backend. It also integrates with a Redis queue for handling notification jobs.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm or yarn
- Redis
- Docker (optional, for running Redis)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/notification-service.git
   cd notification-service
   ```

2. Install the dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

## Running the Application

1. Start Redis:

   If you have Docker installed, you can run Redis with the following command:

   ```bash
   docker run -d -p 6379:6379 redis
   ```

   Alternatively, you can install Redis directly on your machine.

2. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

3. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Running Tests

To run tests for the backend, use the following command:

```bash
cd backend
npm test
```

To run tests for the frontend, use the following command:

```bash
cd frontend
npm test
```

## API Endpoints

### Create Notification

- **URL:** `/api/send-notifications`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "message": "Your notification message",
    "categoryId": 1,
    "notificationTypeId": 1
  }
  ```

### Get Notification Logs

- **URL:** `/api/notification-logs`
- **Method:** `GET`

## Project Structure

```bash
notification-service/
├── backend/
│   ├── src/
│   │   ├── application/
│   │   ├── domain/
│   │   ├── infrastructure/
│   │   ├── interfaces/
│   │   ├── services/
│   │   └── index.ts
│   ├── test/
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NotificationForm.tsx
│   │   │   ├── NotificationLogs.tsx
│   │   │   └── App.tsx
│   │   ├── index.tsx
│   │   └── App.css
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
├── .gitignore
└── README.md
```

## Technology Stack

- **Frontend:**

  - React
  - TypeScript
  - Axios

- **Backend:**
  - Node.js
  - Express
  - TypeScript
  - Redis

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
