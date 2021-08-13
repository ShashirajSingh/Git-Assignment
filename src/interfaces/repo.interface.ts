export interface Repo {
  full_name: string;
  owner: { login: string };
  description: string;
  html_url: string;
  stargazers_count: number;
}
