/**
 * Sorts the lines in a file alphabetically and wraps them in HTML list elements.
 * The first line of the file is preserved as a header.
 * Usage: node sortFile.js <fileName>
 * Example:
 * $ node scrapers/sortFile.mjs docs/Overview/indexed-in-KERISSE.md
 * 
 */

import fs from 'fs';

const urlRegex = /(https?:\/\/[^\s]+)/g;

function sortLinesInFile(fileName) {
  // Read the file
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Check if the content already contains <ul> or <li>
    if (data.includes('<ul>') || data.includes('<li>')) {
      console.log('The content already contains HTML list elements, skipping processing.');
      return;
    }

    // Split the data into lines
    const lines = data.split('\n');

    // Remove empty lines and skip the first line
    const nonEmptyLines = lines.slice(1).filter(line => line.trim() !== '');

    // Sort the non-empty lines alphabetically
    const sortedLines = nonEmptyLines.sort();

    // Wrap and convert URL lines to clickable links
    const wrappedLines = sortedLines.map(line => {
      const isURL = line.match(urlRegex);
      if (isURL) {
        const url = isURL[0];
        const wrappedURL = `<a href="${url}" target="_blank">${url}</a>`;
        return `<li>${wrappedURL}</li>`;
      }
      return `<li>${line}</li>`;
    });

    // Join the wrapped lines into a single string
    const wrappedContent = wrappedLines.join('\n');

    // Wrap the content in <ul> and </ul>
    const finalContent = `<ul>\n${wrappedContent}\n</ul>`;

    // Preserve the first line (header) and append the final content
    const contentWithHeader = `${lines[0]}\n${finalContent}`;

    // Write the final content back to the file
    fs.writeFile(fileName, contentWithHeader, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
        return;
      }
      console.log('File sorted and wrapped in HTML successfully!');
    });
  });
}

// Usage: node sortFile.js <fileName>
const fileName = process.argv[2];
if (!fileName) {
  console.error('Please provide a file name as an argument.');
  process.exit(1);
}

sortLinesInFile(fileName);