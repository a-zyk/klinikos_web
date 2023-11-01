const BASE_PATH = "https://klinika.fleetkick.com/items/"
const getArticles = async () => {
  const response = await fetch(`${BASE_PATH}articles?sort=-date_created`);
  return await response.json();
}

export {
    getArticles
}