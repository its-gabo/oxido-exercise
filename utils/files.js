import * as fs from "fs";

export const writeFile = (filePath, content) => {
  try {
    fs.writeFileSync(filePath, content);
  } catch (error) {
    console.error("Error occured while writing file.\n" + error);
  }
};

export const readFile = (filePath) => {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Error occured while reading file.\n" + error);
  }
};
