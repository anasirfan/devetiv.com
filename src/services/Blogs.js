import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "ba1a09ab2247b9d23f720a7b2b",
  version: "v5.0",
});

const BLOG_URL = "http://localhost:2368";
const API_KEY = "ba1a09ab2247b9d23f720a7b2b";

export async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${API_KEY}&include=tags,authors`
  ).then((res) => res.json());

  return res.posts;
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
