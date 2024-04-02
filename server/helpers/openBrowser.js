// openBrowser.js
require('dotenv').config();

const port = process.env.PORT;

import('open').then(({ default: open }) => {
  open(`http://localhost:${port}`);
});