export async function load() {
    let res = await fetch("https://klinika.fleetkick.com/items/employees");
    const data = await res.json();
    return data;
  }
  