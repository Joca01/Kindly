const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', async (req, res) => {
    res.render('counter')
});

app.get('/Homepage', async (req, res) => {
    res.render('homepage')
});

app.get('/Products', async (req, res) => {
    res.render('products')
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));