const buildSitemap = (pages) => {
  const baseUrl = "https://www.baltijosveterinarijosklinika.lt";
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  Object.keys(pages).forEach((page) => {
    const priority = pages[page];
    xml += `<url>
            <loc>${baseUrl}/${page}</loc>
            <priority>${priority}</priority>
            <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
            <changefreq>daily</changefreq>
        </url>`;
  });
  xml += "</urlset>";
  return xml;
};

const getArticles = async () => {
  let res = await fetch("https://klinika.fleetkick.com/items/articles");
  return await res.json();
};

export async function GET() {
  // List of page urls and their priorities
  // 0 – 0.3: Old news posts, outdated guides, irrelevant pages you nevertheless don't want to delete, merge, or update.
  // 4 – 0.7: Articles, blog posts, category pages, FAQs, system pages. The bulk of your site's content falls into this range.
  // 8 – 1.0: Extremely important content, such as your homepage, major category pages, product pages, and subdomain indexes.
  const articleConfig = {};
  const defaultArticlePriority = 0.6;

  const articles = await getArticles();
  articles.data.forEach((article) => {
    articleConfig[`straipsniai/${article.slug}`] = defaultArticlePriority;
  });

  const pageConfig = {
    [""]: 1,
    ["kontaktai"]: 0.5,
    ["paslaugos"]: 0.5,
    ["straipsniai"]: 0.5,
    ...articleConfig,
  };
  const xml = buildSitemap(pageConfig);
  const options = {
    headers: {
      ["content-type"]: "application/xml",
    },
  };

  return new Response(xml, options);
}
