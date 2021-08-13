export interface Repo {
  name: string;
  owner: { login: string };
  description: string;
  html_url: string;
  stargazers_count: number;
}
