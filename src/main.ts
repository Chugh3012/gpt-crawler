import { defaultConfig } from "../config.js";
import { crawl, write } from "./core.js";
import { readFileSync } from 'fs';

const urls = JSON.parse(readFileSync('./src/uniqueUrls.json', 'utf8'));

await crawl(defaultConfig, urls);
await write(defaultConfig);
