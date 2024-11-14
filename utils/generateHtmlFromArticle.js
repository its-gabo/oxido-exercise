import OpenAI from "openai";

import { configDotenv } from "dotenv";

import { writeFile } from "./index.js";

configDotenv();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateHtmlFromArticle = async (article) => {
  const userPrompt = `
        Please convert the following article text into HTML code. The HTML structure should be clean, with no CSS styles or JavaScript scripts, and should include only the elements needed to display the content in a browser.
    
        Guidelines:
            1. Do not include <html>, <head>, or <body> tags. The code should contain only the content meant to go inside <body>.
            2. Use appropriate HTML tags, such as <h1>, <h2>, <p>, <ul>, <ol>, and <blockquote> to logically structure the article content.
            3. Where the article describes concepts or sections that could be enhanced with an image (e.g., references to technologies), insert an <img> element with src="image_placeholder.jpg" and a descriptive alt attribute explaining the intended image content (e.g., "Illustration of a neural network processing data"). Add a caption for each image using the <figcaption> tag, directly under each image.
            4. Ensure the HTML structure is clear, sectioned appropriately, and well-indented.
        
        Here is the article to convert:

        ${article}
    `;

  const systemPrompt = `
    Instructions:
        - Based on the provided article, generate the HTML code for the content. 
        - Follow the provided guidelines, ensuring the correct use of HTML tags for structuring the content.
        - For sections requiring images, insert the <img> element with placeholders and descriptive alt attributes.
        - Do not include the <html>, <head>, or <body> tags. Only provide the content for the <body> section.

    Expected Output Format:
        - A clean, well-structured HTML code containing the necessary tags, including images with placeholders and appropriate captions. `;

  try {
    const chatsResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0,
      max_tokens: 3000,
    });

    const articleHtml = chatsResponse.choices[0].message.content;

    writeFile("artykul.html", articleHtml);
  } catch (error) {
    console.error("Error occured, when generating article\n" + error);
  }
};
