export interface User {
  full_name: string;
  owner: { login: string };
  description: string;
  stars_count: number;
}
