# **Biomind Logic**

Biomind Logicis an **educational resource integration platform** that provides students with access to organized academic materials such as mind maps, syllabus analysis, and more. This project combines a **Next.js** frontend with a **Flask** backend, using **MySQL** for data storage and management.

## **Features**
- **Responsive User Interface**: Built with Next.js and TailwindCSS for a seamless user experience across devices.  
- **Resource Organization**: Resources are categorized by education level (e.g., A-Level, IGCSE) and subject for intuitive browsing.  
- **Authentication System**: Includes login, registration, and password reset functionality using Flask APIs.  
- **Dynamic Routing**: Implements resource navigation with dynamic paths (e.g., `/Resources/[category]/[level]/[subject]`).  

---

## **Project Structure**

### **Frontend (Next.js)**
Located in the **`src`** directory:
- **`components`**: Reusable UI components, such as `Header`, `Navbar`, and `Footer`.  
- **`pages`**:
  - **API Routes**: Authentication logic in `api` folder (`login.js`, `register.js`, etc.).
  - **Dynamic Pages**: Resource browsing implemented via nested routes (e.g., `Resources/[category]/[level]/[subject]`).
  - **Static Pages**: Includes `about.js`, `categories.js`, etc., for general site information.

### **Backend (Flask)**
- **`app.py`**: Entry point for the Flask server, handling API routes and database connections.
- **`lib/db.js`**: Contains logic for database interactions using MySQL.

### **Configuration Files**
- **`next.config.js`**: Next.js configuration for environment variables and build settings.
- **`tailwind.config.js`**: TailwindCSS configuration for styling.
- **`requirements.txt`**: Lists Python dependencies for Flask backend.

---

## **Technologies Used**

### **Frontend**
- **Next.js**: React framework for server-side rendering and static site generation.
- **TailwindCSS**: Utility-first CSS framework for responsive styling.

### **Backend**
- **Flask**: Lightweight Python web framework for handling API requests.
- **MySQL**: Relational database for managing user and resource data.

---

## **Installation**

### Prerequisites
Ensure the following are installed on your system:
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MySQL
- npm or yarn
- pip

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Thresh514/biomindweb.git
   cd biomindweb
   ```

2. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Install frontend dependencies:
   ```bash
   cd src
   npm install
   ```

4. Set up the MySQL database:
   - Create a new database:
     ```sql
     CREATE DATABASE biomindweb;
     ```
   - Update the Flask configuration in `app.py` with your database credentials:
     ```python
     app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@localhost/biomindweb'
     ```

5. Start the Flask backend:
   ```bash
   python app.py
   ```

6. Start the Next.js frontend:
   ```bash
   cd src
   npm run dev
   ```

7. Access the application at:
   ```
   http://localhost:3000
   ```

---

## **Future Enhancements**
- Add user roles (e.g., student, administrator) for resource management.
- Enable video streaming for classroom recordings.
- Implement search and recommendation systems for resources.
- Enhance backend with caching for improved performance.

---

## **Contact**
Created by **Jiayong Tu**  
Email: [tonytudaodao@gmail.com](mailto:tonytudaodao@gmail.com)  
GitHub: [Thresh514](https://github.com/Thresh514)
