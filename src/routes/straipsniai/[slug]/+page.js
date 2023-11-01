import { error } from "@sveltejs/kit";
import { getArticle } from "$lib/requests.js";
export async function load({ params }) {
  const data = await getArticle(params.slug);
  if (data.data) {
    return data.data;
  }
  throw error(404, "Straipsnis nerastas");
}
