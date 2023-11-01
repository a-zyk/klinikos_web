const BASE_PATH = "https://klinika.fleetkick.com/items/";

const getArticles = async () => {
  const response = await fetch(`${BASE_PATH}articles?sort=-date_created`);
  return await response.json();
};

const getArticle = async (slug) => {
  const response = await fetch(
    `https://klinika.fleetkick.com/items/articles/${slug}`
  );
  return await response.json();
};

const getServices = async () => {
  const res = await fetch(`${BASE_PATH}services?fields=*,items.*`);
  return await res.json();
};

const getEmployees = async () => {
  const res = await fetch(`${BASE_PATH}employees`);
  return await res.json();
};

export { getArticles, getArticle, getServices, getEmployees };
