# MoviesDatabase API Overview

## API Overview

The MoviesDatabase API provides access to a wide range of movie-related data. It includes endpoints for retrieving information about movies, TV shows, actors, genres, trending content, and more. It’s a RESTful API that can be easily integrated into any frontend or backend application.

## Version

**1.0.0**

## Available Endpoints

- **GET /titles**  
  Search for movies, TV shows, or people by title.

- **GET /titles/x/titles-by-ids**  
  Fetch details for a list of specific movie or show IDs.

- **GET /titles/{title_id}**  
  Get details of a single movie or show by ID.

- **GET /actors/{actor_id}**  
  Retrieve information about a particular actor.

- **GET /titles/utils/genres**  
  Get a list of available genres.

- **GET /titles/random**  
  Fetch a random title from the database.

- **GET /titles/trending**  
  Retrieve trending titles.

- **GET /titles/{title_id}/ratings**  
  Get rating information for a specific title.

## Request and Response Format

### Sample Request

```http
GET https://moviesdatabase.p.rapidapi.com/titles
Headers:
  X-RapidAPI-Key: YOUR_API_KEY
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

---

📌 **Next Steps**:
- Run:
  ```bash
  git add README.md
  git commit -m "Add full MoviesDatabase API overview to README"
  git push
