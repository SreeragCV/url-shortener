# url - shortener
An application for shortening long URLs

# Prerequisites
Node.js: Make sure you have Node.js installed. You can download it from the official website.
MongoDB: Install MongoDB to store and manage your application's data.
Visual Studio Code (VSCode): Optional but recommended code editor for development.

# Installation:
Clone the repository: <br>
git clone <repository_url> <br>
cd <project_directory> <br>

Install dependencies: <br>
npm install <br>
PORT=3000 <br>
DATABASE_URL=mongodb://localhost:27017/tinyUrl <br>

# Running the Application
To start the application, run the following command: <br>
npm start <br>
To connect and interact with the MongoDB database, run the following command: <br>
mongosh <br>

# API Usage
1 GET /url/:id <br>
Description: Fetches the original URL associated with the given short URL identifier. <br>
Request: GET /url/U7OgKSPNt <br>
Response: <br>
Example Request: req.params.id = U7OgKSPNt v
Example Response: Your Short URL for https://google.com is U7OgKSPNt <br>


2 GET /create-short-url <br>
Description: Renders the form for creating a short URL. <br>
(This endpoint is likely to serve an HTML page and may not follow the traditional request/response structure typical of APIs. You might render a form directly on a web page.)

3 POST /url <br>
Description: Creates a short URL. <br>
Request: <br>
Example Request: <br>
{
    "url": "https://google.com"
} <br>
Response: <br>
Example Response: Your Short URL for https://google.com is U7OgKSPNt <br>

4 GET /:id <br>
Description: Redirects to the original URL from the short URL. <br>
Request: GET /U7OgKSPNt <br>
Response: <br>
Example Request: req.params.id = U7OgKSPNt <br>
Example Response: Original URL of 'U7OgKSPNt' is google.com <br>

# conclusion
You're now equipped to run the application, interact with its API, and make any necessary configurations.
Feel free to explore additional resources, troubleshoot any issues, or reach out for support if needed.
