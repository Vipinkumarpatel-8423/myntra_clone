// const fs = require('node:fs/promises');

// async function getStoredItems() {
//   const rawFileContent = await fs.readFile('items.json', { encoding: 'utf-8' });
//   const data = JSON.parse(rawFileContent);
//   const storedItems = data.items ?? [];
//   return storedItems;
// }

// function storeItems(items) {
//   return fs.writeFile('items.json', JSON.stringify({ items: items || [] }));
// }

// exports.getStoredItems = getStoredItems;
// exports.storeItems = storeItems;

const fs = require('node:fs/promises');

async function getStoredItems() {
  try {
    const rawFileContent = await fs.readFile('items.json', { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const storedItems = data.items ?? [];
    return storedItems;
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If file doesn't exist, create it with empty items
      await storeItems([]);
      return [];
    } else {
      // If another error, re-throw
      throw error;
    }
  }
}

function storeItems(items) {
  return fs.writeFile('items.json', JSON.stringify({ items: items || [] }, null, 2));
  // Added "null, 2" to pretty print JSON with indentation
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
