# Dynamic Blog Website

A dynamic blog platform built using PHP and MySQL, providing users with features like creating, managing, and viewing blog posts. This project serves as a foundation for understanding the core principles of web development and PHP programming.

---

## **Features**

- User-friendly interface for blog creation and management.
- CRUD operations (Create, Read, Update, Delete) for blog posts.
- MySQL database integration for storing and retrieving blog data.
- Secure user authentication system.
- Responsive design for seamless experience across devices.

---

## **Technologies Used**

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Database**: MySQL
- **Other Tools**: Bootstrap (for styling), XAMPP (for local development)

---

## **Installation**

Follow these steps to set up and run the project locally:

### Prerequisites

- PHP installed on your system (version 7.4 or higher recommended).
- MySQL server running (can use XAMPP or any other tool).
- A web server (e.g., Apache).

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Aishwary2004Gupta/PHP-Blog-Project.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd PHP-Blog-Project
   ```
3. **Import the Database**:

   - Open your MySQL management tool (phpMyAdmin or similar).
   - Create a new database, e.g., `blog_database`.
   - Import the `blog_database.sql` file from the project folder.

4. **Update Configuration**:

   - Open `config.php` (or equivalent) and update the database credentials:
     ```php
     $db_host = 'localhost';
     $db_user = 'your_username';
     $db_pass = 'your_password';
     $db_name = 'blog_database';
     ```
 
5. **Start the Server**:
   - If using XAMPP, place the project folder in the `htdocs` directory.
   - Start Apache and MySQL from the XAMPP control panel.
   - Open your browser and navigate to:
     ```
     http://localhost/PHP-Blog-Project
     ```

---

## **Usage**

- Navigate to the homepage to view all blogs.
- Log in or register to create, edit, or delete blog posts.
- Explore features like search, category filters, and more.

---

## **Contributing**

Contributions are welcome! Here's how you can help:

1. Fork the repository.
2. Create a new branch for your feature/bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---
