import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders all movies", () => {
  // Given
  const movie: Movie = {
    id: 1,
    title: `Harry Potter and the Philosopher's Stone`,
    genre_ids: [1, 2, 3],
    backdrop_path: "",
    poster_path: "/posters/harry-potter-and-the-philosopher-s-stone",
  };
  const movies = [movie];

  // When
  render(<App movies={movies} categories={[]} />);

  // Then
  const movieEl = screen.getByText("Harry Potter and the Philosopher's Stone");
  expect(movieEl).toBeTruthy();
});
