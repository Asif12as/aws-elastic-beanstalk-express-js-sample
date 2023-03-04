const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello VTU16708 Automatated pipelines is working'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
