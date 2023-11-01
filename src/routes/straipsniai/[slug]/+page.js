import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const response = await fetch(
    `https://klinika.fleetkick.com/items/articles/${params.slug}`
  );
  const data = await response.json();
  if (data.data) {
    return data.data;
  }
  throw error(404, "Straipsnis nerastas");
}
