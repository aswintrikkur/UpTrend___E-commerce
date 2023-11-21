const express = require('express');
const cors = require('cors');
const productList = require('./productList.json');
const { searchValueOnDB } = require('./utils');


const app = express();
app.use(express.json());
app.use(cors());

// console. log("Node. js JavaScript engine:", process.versions);


const PORT = 3111;
app.listen(PORT, () => {
    console.log(`---------server started in ${PORT}-----------`);
});

app.get('/',(req,res)=>{
    res.json(`You are connected to ${PORT}`);
})

//  ------api---------
app.get('/api/productList', (req, res) => {
    res.json(productList);

})

app.get('/api/productDetails/:id', (req, res) => {   // here mentioned get method request is expecting id
    console.log('api request reached server');
    const { id } = req.params;   // simply passing id(param) along with url
    // const {id}= req.query; //while passing as query params
    const productDetails = productList.find(data => (data.id == id))
    res.json(productDetails);
});

app.get('/api/searchProductList', (req, res) => {
    const { value } = req.query;
    console.log(value);
    const searchProductList = productList.filter(data => {
        return ( searchValueOnDB(value,data) )
    });
    console.log(searchProductList);
    res.json(searchProductList);

});