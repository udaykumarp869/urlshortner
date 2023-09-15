# URL Shortener Service

This is a URL shortening service that allows you to create short and easy-to-share URLs from long ones. You can access this service by visiting the following URL:

[URL Shortener Service](https://urlshortner-3cwa.onrender.com/home)

## Specifications

- Deployment Platform: Render
- Service Domain: [URL Shortener Service](https://urlshortner-3cwa.onrender.com/home)
- Database: MySQL, hosted as a Render add-on
https://console.clever-cloud.com/users/me/addons/addon_10fa1ed7-9fbb-4e25-a679-350a4f2f0639

## Usage

1. Visit the URL Shortener Service: [URL Shortener Service](https://urlshortner-3cwa.onrender.com/home)

2. Enter a long URL that you want to shorten.

3. Click the "Shorten" button.

4. You will receive a shortened URL that you can easily copy and share.


## How It Works

- The service uses an Express.js application to handle URL shortening and redirection.

- When you enter a long URL and click "Shorten," the service generates a unique short code, stores the mapping between the short code and long URL in the MySQL database, and returns the shortened URL.

- You can then use the shortened URL to access the original long URL.

## Redirecting to Home Page

- After successfully shortening a URL and visiting the shortened URL, there is an option to go back to the home page by clicking "Go back to home page" on the shortened URL page.

## Database Add-on

- The MySQL database used by this service is hosted as a Render add-on, ensuring reliable data storage and retrieval.

Feel free to use this URL shortener service for your URL shortening needs!


