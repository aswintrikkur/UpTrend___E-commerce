const express = require('express');
const cors = require('cors');
const productList = require('./productList.json')

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`---------server started in ${PORT}-----------`);
});


//  ------api---------
app.get('/api/productList', (req, res) => {
res.json(productList);

})