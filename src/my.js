// import { chromium } from 'playwright';
// import { writeFileSync } from 'fs';

import { readFileSync, writeFileSync } from 'fs';

function extractUniqueUrls(filePath) {
    // Read and parse the JSON file
    const data = JSON.parse(readFileSync(filePath, 'utf8'));
    const allUrls = new Set(); // Using a Set to ensure uniqueness

    // Iterate over each key and add URLs to the set
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            data[key].forEach(url => allUrls.add(url));
        }
    }

    // Convert the set back to an array
    const uniqueUrls = Array.from(allUrls);
    return uniqueUrls;
}

const uniqueUrls = extractUniqueUrls('extractedLinks.json');
console.log('Unique URLs:', uniqueUrls);

// Optionally, write to a new JSON file
writeFileSync('uniqueUrls.json', JSON.stringify(uniqueUrls, null, 2));
console.log('Unique URLs saved to uniqueUrls.json');


// async function extractLinks(url, depth = 3, waitTime = 5000) {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     const visited = new Set();
//     const linksToVisit = [url];

//     const allLinks = {};

//     while (linksToVisit.length > 0 && depth > 0) {
//         const currentUrl = linksToVisit.pop();
//         if (visited.has(currentUrl)) {
//             continue;
//         }

//         try {
//             await page.goto(currentUrl);
//             // Wait for JavaScript to load content
//             await page.waitForTimeout(waitTime);

//             const links = await page.$$eval('a', anchors => anchors.map(anchor => anchor.href));
//             allLinks[currentUrl] = links;
//             links.forEach(link => {
//                 if (!visited.has(link)) {
//                     linksToVisit.push(link);
//                 }
//             });
//             visited.add(currentUrl);
//         } catch (error) {
//             console.error(`Failed to process ${currentUrl}:`, error);
//         }

//         depth--;
//     }

//     await browser.close();
//     return allLinks;
// }

// extractLinks('https://www.nextgatetech.com/', 3).then(allLinks => {
//     writeFileSync('extractedLinks.json', JSON.stringify(allLinks, null, 2));
//     console.log('Links extracted and saved to extractedLinks.json');
// });

