# Video Search API

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Seed the database with DataSet:

   ```sh
   npm run seed
   ```

3. Run the application:
   ```sh
   npm run server
   ```

## Usage

### Search Videos

Endpoint: `GET /api/videos/search`

### Example Usage

- `GET /api/videos/search?title=someTitle`
- `GET /api/videos/search?tags=tag1,tag2`
- `GET /api/videos/search?description=someDescription`
- `GET /api/videos/search?title=someTitle&tags=tag1&description=someDescription&page=1&limit=10`

### Query Parameters:

- `title` (optional): Search by video title.
- `description` (optional): Search by video description.
- `tags` (optional): Comma-separated list of tags to search by.
- `page` (optional): Page number for pagination (optional, default: 1)
- `limit` (optional): Number of results per page (optional, default: 10)

## Features

- `Rate Limiting`

  The API has rate limiting enabled to prevent abuse. Requests exceeding the limit will receive a `429` Too Many Requests response.

- `Error Handling`

  The API handles errors gracefully and returns appropriate error messages with status codes.
  Errors during database operations, input validation, or unexpected server errors are all handled.

- `Testing`

  To test the API locally, use tools like Postman or cURL to send requests to the provided endpoints.
  Unit tests and integration tests can be added to the test directory for automated testing.
