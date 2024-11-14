import { generateHtmlFromArticle, readFile } from "./utils/index.js";

const main = async () => {
  const article = readFile("./artykul.txt");

  if (article) {
    await generateHtmlFromArticle(article);
  }
};

main();
