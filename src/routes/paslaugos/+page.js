import { getServices } from "$lib/requests";
export async function load() {
  return await getServices();
}
