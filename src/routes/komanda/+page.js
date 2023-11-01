import { getEmployees } from "$lib/requests";

export async function load() {
  return await getEmployees();
}
