# URL_SHORTener

A simple URL shortener application built with Node.js and MongoDB.\
Shortens long URLs to compact ones and handles redirection and
analytics.

## 🚀 Features

-   Create short URLs from long URLs\
-   Redirect users from short URL to original URL\
-   Track analytics (views, date, etc)\
-   Built using MVC‑style architecture with clear directory structure\
-   Uses MongoDB for persistent storage

## 🧩 Tech Stack

-   **Node.js** with Express for the server\
-   **MongoDB** (via Mongoose) for data storage\
-   **EJS** for templating / views\
-   JavaScript (ES6+) for backend logic

## 📁 Project Structure

    controllers/   # route handlers and business logic  
    middleware/    # custom middleware (e.g., for validation)  
    models/        # Mongoose schemas and models  
    routes/        # Express route definitions  
    service/       # service layer helpers (URL‑shortening logic)  
    views/         # EJS templates / front‑end rendering  
    index.js       # entry point of the application  
    connect.js     # MongoDB connection setup  

## 🔧 Setup & Installation

1.  Clone the repository

    ``` bash
    git clone https://github.com/amankamlesh/URL_SHORTener.git
    cd URL_SHORTener
    ```

2.  Install dependencies

    ``` bash
    npm install
    ```

3.  Create a `.env` file in the project root and add the required
    environment variables (example):

        PORT=3000
        MONGODB_URI=mongodb://localhost:27017/url_shortener
        BASE_URL=http://localhost:3000

4.  Start the application

    ``` bash
    npm start
    ```

    Or if you have nodemon:

    ``` bash
    npm run dev
    ```

5.  Open your browser and go to `http://localhost:3000`

## 🔍 Usage

-   Enter a long URL in the UI and submit\
-   You'll be given a short URL\
-   Visiting the short URL will redirect you to the original long URL

## 📜 License

Open source --- feel free to use, modify, and share!

## 🙏 Contributions

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Aman Kamlesh**
