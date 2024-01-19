const express = require('express')
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const app = express()
const cors = require('cors')
const port = 3000

app.use(express.json());
app.use(cors())

app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello, welcome to my Express.js API!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});