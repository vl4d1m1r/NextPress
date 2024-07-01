export const fetcher = (path: string) => fetch(path).then((res) => res.json());

export const postsFetcher = async (path: string) => {
  const response = await fetch(path);
  let totalPosts = "";
  let totalPages = "";
  let posts = [];
  if (response.ok) {
    totalPosts = response.headers.get("X-WP-Total") ?? "";
    totalPages = response.headers.get("X-WP-TotalPages") ?? "";
    posts = await response.json();
  }
  return { totalPages, totalPosts, posts };
};
