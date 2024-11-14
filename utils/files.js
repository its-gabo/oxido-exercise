import * as fs from "fs";

export const writeFile = (filePath, content) => {
  fs.writeFileSync(filePath, content);
};

export const readFile = (filePath) => {
  return fs.readFileSync(filePath, "utf-8");
};
