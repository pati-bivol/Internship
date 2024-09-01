import {AuthorResponse} from "../authors";

export interface BookResponse {
  title: string;
  authorId: number;
  yearWritten: number;
  bookId: string;
  author: AuthorResponse;
}
