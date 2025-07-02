// const express = require('express');
// const bodyParser = require('body-parser');

// const { getStoredItems, storeItems } = require('./data/items');

// const app = express();

// app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// app.get('/items', async (req, res) => {
//   const storedItems = await getStoredItems();
//   await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
//   res.json({ items: storedItems });
// });

// app.get('/items/:id', async (req, res) => {
//   const storedItems = await getStoredItems();
//   const item = storedItems.find((item) => item.id === req.params.id);
//   res.json({ item });
// });

// app.post('/items', async (req, res) => {
//   const existingItems = await getStoredItems();
//   const itemData = req.body;
//   const newItem = {
//     ...itemData,
//     id: Math.random().toString(),
//   };
//   const updatedItems = [newItem, ...existingItems];
//   await storeItems(updatedItems);
//   res.status(201).json({ message: 'Stored new item.', item: newItem });
// });

// app.listen(8080);


const express = require('express');
const bodyParser = require('body-parser');

const { getStoredItems, storeItems } = require('./data/items');

const app = express();

// Middleware to parse JSON body
app.use(bodyParser.json());

// CORS Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// GET /items - Get all items
app.get('/items', async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    // await new Promise(resolve => setTimeout(resolve, 2000)); // simulate delay
    res.json({ items: storedItems });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch items.' });
  }
});

// GET /items/:id - Get a single item by id
app.get('/items/:id', async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    const item = storedItems.find((item) => item.id === req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }

    res.json({ item });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch item.' });
  }
});

// POST /items - Create a new item
app.post('/items', async (req, res) => {
  try {
    const existingItems = await getStoredItems();
    const itemData = req.body;

    const newItem = {
      ...itemData,
      id: Math.random().toString(), // Unique-ish ID (for small apps it's okay)
    };

    const updatedItems = [newItem, ...existingItems];
    await storeItems(updatedItems);

    res.status(201).json({ message: 'Stored new item.', item: newItem });
  } catch (error) {
    res.status(500).json({ message: 'Failed to store item.' });
  }
});

// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
