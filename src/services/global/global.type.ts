import type { Genre } from "../genre/genre.type";

export interface Movie {
  _id: string;
  title: string;
  genre: Pick<Genre, "name" | "_id">;
  thumbnail: string;
  thumbnailUrl: string;
  id: string;
}
