<h1 align="center"> Augen:  The Media Site </h1>

<p align="center">
  <img alt="Build" src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge">
  <img alt="Issues" src="https://img.shields.io/badge/Issues-0%20Open-blue?style=for-the-badge">
  <img alt="Contributions" src="https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge">
</p>

## Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [License](#-license)

---

**Augen** provides the solution by offering a centralized, intelligent media platform where documentation isn't just written—it's managed. Through a component-based React architecture and an Express-powered REST API, the platform allows users to analyze codebases, categorize documentation features, and maintain professional profiles for both content creators (Writers) and documentation consumers (Readers).

### Architecture Overview
The system follows a modern, scalable approach:
*   **Frontend:** A component-driven React application utilizing Redux for state management, providing an interactive, real-time user experience.
*   **Backend:** A RESTful Express service managing authentication, file uploads via Cloudinary, and data persistence through Mongoose.
*   **Deployment:** Fully containerized architecture using Docker and Docker Compose for seamless environment parity and simplified scaling.

---

## Key Features

Augen is built with the user's workflow at the center, focusing on outcomes that drive value for developers and project maintainers.

### Seamless Documentation Generation
Users can interact with a polished interface to initiate repository analysis. The React-driven UI ensures that the process of generating documentation is as simple as a few clicks, abstracting away the complexity of manual Markdown formatting.

### Dual-Profile Ecosystem (Writers & Readers)
The platform distinguishes between two primary user personas to optimize the experience:
*   **Writer Profiles:** Empower contributors to manage their generated documentation, track repository history, and refine content.
*   **Reader Profiles:** Provide a streamlined consumption experience for users looking to understand and implement the documented projects.

### Dynamic Content Filtering & Categorization
Navigating through large volumes of documentation is made easy through:
*   **Category Filters:** Organically group documentation by project type, language, or complexity.
*   **Content Tabs:** Switch between different views of the same project, such as overview, technical details, or setup instructions.

### Enterprise-Grade Security & Authentication
Built on industry standards including JWT (JSON Web Tokens) and Bcrypt hashing, Augen ensures that user data and documentation history remain private and protected. The platform supports secure signup and login flows with role-based middleware to safeguard sensitive operations.

### Integrated Media Management
With built-in support for Cloudinary and Multer, the platform allows users to manage visual assets effectively. Documentation can be enriched with images and diagrams, handled through a professional-grade media pipeline.

---

## Tech Stack & Architecture

The technical choices behind Augen were made to ensure high performance, maintainability, and a modern developer experience.

| Technology | Purpose | Why it was Chosen |
| :--- | :--- | :--- |
| **React** | Frontend Framework | Enables a reactive, component-based UI that handles complex state changes seamlessly. |
| **Express** | Backend API | Provides a lightweight, fast, and flexible routing system for RESTful communications. |
| **Node.js** | Runtime Environment | High-performance asynchronous execution for backend logic and file processing. |
| **Docker** | Containerization | Ensures consistent behavior across development, staging, and production environments. |
| **Mongoose** | Data Modeling | Facilitates structured data handling and schema validation for users and content. |
| **Redux** | State Management | Manages application-wide state (content, avatars, follows) with predictable updates. |


---

## Getting Started

### Prerequisites

To run Augen locally or in a production environment, ensure you have the following installed:
*   **Docker:** version 20.10.x or higher
*   **Docker Compose:** version 2.x or higher
*   **Node.js:** (Optional, for local development without Docker) version 18.x or higher

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Bharatdwaj3/augen.git
    cd Bharatdwaj3-augen-06976e0
    ```

2.  **Environment Setup**
    The project includes `.env.example` files in both `frontend/` and `backend/` directories. Create your local environment files:
    ```bash
    cp frontend/.env.example frontend/.env
    cp backend/.env.example backend/.env
    ```

3.  **Launch via Docker Compose**
    The most efficient way to start the entire stack is using Docker:
    ```bash
    docker-compose up --build
    ```
    This command will build the frontend and backend images, configure the networks, and start the services.

4.  **Access the Application**
    Once the containers are running:
    *   **Frontend UI:** Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).
    *   **Backend API:** The API will be accessible at `http://localhost:5000` (default Express port).

---

## Usage

### Authenticating Users
*   Navigate to the `/signup` page to create a new Writer or Reader account.
*   Use the `/login` page to access your personalized dashboard and history.

### Creating Documentation
1.  Log in as a **Writer**.
2.  Navigate to the **New Story** page.
3.  Fill in the repository details and metadata.
4.  Submit to trigger the analysis and generation process.

### Exploring Content
*   Use the **Explore** page to browse documentation generated by other users.
*   Apply **Category Filters** to narrow down documentation for specific technologies.
*   View project details through the **ContentGrid** and **ContentDetails** components.


---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for complete details.

