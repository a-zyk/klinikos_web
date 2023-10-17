export async function load() {
  let res = await fetch("https://klinika.fleetkick.com/items/articles");
  const data = await res.json();
  console.log(data);
  return data;
}
