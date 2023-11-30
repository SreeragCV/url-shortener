# url - shortener
An application for shortening long URLs

# Prerequisites
Node.js: Make sure you have Node.js installed. You can download it from the official website.
MongoDB: Install MongoDB to store and manage your application's data.
Visual Studio Code (VSCode): Optional but recommended code editor for development.

# Installation:
Clone the repository:
bash
Copy code
git clone <repository_url>
cd <project_directory>

Install dependencies:
npm install
PORT=3000
DATABASE_URL=mongodb://localhost:27017/tinyUrl

# Running the Application
To start the application, run the following command:
npm start
To connect and interact with the MongoDB database, run the following command:
mongosh

# API Usage
1 GET /url/:id
Description: Fetches the original URL associated with the given short URL identifier.
Request: GET /url/U7OgKSPNt
Response:
Example Request: req.params.id = U7OgKSPNt
Example Response: Your Short URL for https://google.com is U7OgKSPNt


2 GET /create-short-url
Description: Renders the form for creating a short URL.
(This endpoint is likely to serve an HTML page and may not follow the traditional request/response structure typical of APIs. You might render a form directly on a web page.)

3 POST /url
Description: Creates a short URL.
Request:
Example Request:
json
Copy code
{
    "url": "https://google.com"
}
Response:
Example Response: Your Short URL for https://google.com is U7OgKSPNt

4 GET /:id
Description: Redirects to the original URL from the short URL.
Request: GET /U7OgKSPNt
Response:
Example Request: req.params.id = U7OgKSPNt
Example Response: Original URL of 'U7OgKSPNt' is google.com

# conclusion
You're now equipped to run the application, interact with its API, and make any necessary configurations.
Feel free to explore additional resources, troubleshoot any issues, or reach out for support if needed.
