import { error } from "@sveltejs/kit";

export async function load({ params }) {
  let res = await fetch(
    `https://klinika.fleetkick.com/items/articles/${params.slug}`
  );
  const data = await res.json();
  if (data.data) {
    console.log(data)
    return data.data;
  }
  throw error(404, "Straipsnis nerastas");
}
