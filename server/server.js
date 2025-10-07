const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.get('/', (req, res) => {
    res.send('Welcome to the Invoice Management System API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



