# 📚 Library Management Demo

A **full-stack web application** showcasing seamless integration between **Angular** (frontend) and **Spring Boot** (backend).
It manages **Books**, **Genres**, and **Publishers**, highlighting clean architecture and best practices for modern web development.

---

## 🚀 Features

- 🔹 **Book Management:** Create, update, and browse books with details.
- 🔹 **Genre Management:** Organize books by category or genre.
- 🔹 **Publisher Management:** Maintain publisher records efficiently.
- 🔹 **Full REST Integration:** Angular frontend communicates with Spring Boot APIs.
- 🔹 **Responsive UI:** Built with modern Angular components.

---

## 🧩 Tech Stack

**Frontend:**
- Angular
- TypeScript
- RxJS
- HTML5 / SCSS

**Backend:**
- Spring Boot
- Java
- RESTful API
- Maven / Gradle

**Database:**
- PostgreSQL (configurable)

---

## ⚙️ Setup Instructions

### 1️⃣ Backend (Spring Boot)
```bash
cd backend
mvn spring-boot:run

By default, the API runs on:
➡️ http://localhost:8080

2️⃣ Frontend (Angular)
cd frontend
npm install
npm start


Frontend runs on:
➡️ http://localhost:4200

🔗 API Integration Example
Entity	Endpoint	Method	Description
Books	/api/books	GET	Retrieve all books
Genres	/api/genres	POST	Create a new genre
Publishers	/api/publishers/{id}	DELETE	Delete a publisher
🧠 Architecture Overview
frontend/
 └── src/
      ├── app/
      │    ├── components/
      │    ├── services/
      │    ├── models/
      │    └── pages/
backend/
 └── src/main/java/com/example/library/
      ├── controller/
      ├── service/
      ├── repository/
      └── model/

💡 Highlights

✅ Clean separation of concerns between frontend and backend

✅ Demonstrates RESTful communication using Angular HttpClient

✅ Designed for scalability and easy maintenance

✅ Ideal as a learning project or boilerplate for new apps

🧑‍💻 Author

Daniel Carabalo
Full Stack Developer | Angular + Spring Boot
🔗 GitHub Profile
