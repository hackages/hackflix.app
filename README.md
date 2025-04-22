# Front-End Engineer Test Instructions

## Objective  

Build a movie app using **React**, **TypeScript**, **Vite**, and **Vitest**. The goal is to assess your ability to build a simple front-end app with solid engineering practices.

---

### Initial Setup

1. Download the provided front-end template. It includes:
   - Basic CSS with Tailwind
   - HTML structure
   - React + Vite setup
2. You'll also receive a **backend app** to run locally. This backend will expose the API endpoints needed for this application.

---

### Tasks

#### 1. Backend Integration/Data Fetching

- Integrate the backend API.
- Fetch a list of movies.
- Handle loading and error states properly.

#### 2. Display Movies

- Render the movies in a clean and responsive layout.
- Each movie should show at least:
  - Poster
  - Title
  - Release year
  - Genre(s)

#### 3. Filtering

- Add the ability to filter movies by category (e.g., "Action", "Comedy", etc.).
- The categories come from the API.

#### 4. Search

- Implement a search bar to search movies by title or actor name.
- The search should update the results in real time.

#### 5. Bookmarking (Bonus)

- Allow users to bookmark their favorite movies.
- Bonus points if:
  - Bookmarks persist across page reloads (e.g., use `localStorage`).
  - There is a separate view or route for viewing only bookmarked movies.
PS: There no backend APIs for bookmarks.

---

### Testing (Bonus)

- Use **Vitest** to write at least 3 unit tests:
  - One for the data-fetching logic.
  - One for the search functionality.
  - One for the filtering feature.

---

### Evaluation Criteria

We’ll assess your submission based on:

- Clean, readable, and maintainable code.
- Proper use of TypeScript.
- Clear separation of concerns (components, hooks, utilities, etc.).
- Correct implementation of the requested features.
- Bonus for implementing routing and persistent bookmarks.

---
