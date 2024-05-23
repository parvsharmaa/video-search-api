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
- `GET /api/videos/search?title=someTitle&tags=tag1,tag2&description=someDescription&page=1&limit=10`

### Query Parameters:

- `title` (optional): Search by video title.
- `description` (optional): Search by video description.
- `tags` (optional): Comma-separated list of tags to search by.
