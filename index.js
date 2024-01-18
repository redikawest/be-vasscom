const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
app.use('/api', productRoutes);
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello, welcome to my Express.js API!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});