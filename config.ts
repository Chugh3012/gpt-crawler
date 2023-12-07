import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.nextgatetech.com/",
  match: "https://www.nextgatetech.com/**",
  maxPagesToCrawl: 150,
  outputFileName: "output.json",
};
