import { environment } from '../../environments/environment';

const baseUrl = environment.api;

export const endpoints = {
  authors: `${baseUrl}/authors`,
  books: `${baseUrl}/books`,
  users: `${baseUrl}/users`,
};
