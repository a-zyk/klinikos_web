import { getArticles } from "$lib/requests.js";

export async function load() {
  return await getArticles()
}
