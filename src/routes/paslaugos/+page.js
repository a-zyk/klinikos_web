export async function load() {
    let res = await fetch("https://klinika.fleetkick.com/items/services?fields=*,items.*");
    const data = await res.json();
    return data;
  }
  