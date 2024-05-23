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

Server expoosed on: http://localhost:3000

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

### Request Example

   ```sh
   GET api/videos/search?title=promise&description=smartest&tags=thriller,action&page=1&limit=10
   ```

### Response Example

   ```sh
   {
      "videos": [
         {
               "_id": "664f3ba91c21abb6a304f143",
               "id": 634521,
               "adult": false,
               "title": "The Promised Neverland",
               "video": false,
               "backdrop_path": "/iy08wTsqcWYT2PFTEWFYcxepLeB.jpg",
               "genre_ids": [
                  28,
                  53,
                  14,
                  9648,
                  12,
                  18
               ],
               "original_language": "ja",
               "original_title": "約束のネバーランド",
               "overview": "A group of the smartest kids at a seemingly perfect orphanage uncover its dark secret, and they set in motion a dangerous and desperate escape plan.",
               "popularity": 686.022,
               "poster_path": "/7tMAledkia9p72zON1nLRlyfHO7.jpg",
               "release_date": "2020-12-18T00:00:00.000Z",
               "vote_average": 7.3,
               "vote_count": 44,
               "tags": [
                  "action",
                  "thriller",
                  "fantasy",
                  "mystery",
                  "adventure",
                  "drama"
               ],
               "__v": 0,
               "createdAt": "2024-05-23T12:50:49.031Z",
               "updatedAt": "2024-05-23T12:50:49.031Z"
         }
      ],
      "total": 1,
      "page": 1,
      "pages": 1
   }
   ```

## Features

- `Database - NoSQL`

  - Uses MongoDB database to store videos data.
  - Implements indexing for optimized search query results

- `Rate Limiting`

  - The API has rate limiting enabled to prevent abuse. 
  - Requests exceeding the limit will receive a `429` Too Many Requests response.

- `Error Handling`

  - The API handles errors gracefully and returns appropriate error messages with status codes.
  - Errors during database operations, input validation, or unexpected server errors are all handled.

- `Testing`

  - To test the API locally, use tools like Postman or cURL to send requests to the provided endpoints.
  - Unit tests and integration tests can be added to the test directory for automated testing.
