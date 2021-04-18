const api = require('./api');
const express  = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
console.log("bodyPArser working");
app.use(cors());

const port = process.env.PORT;

app.get('/' , async (req, res) =>  {
    const data = await api.getNews();
    res.send(data);
    console.log("Home");
});

app.get('/tech' , async (req, res) =>  {
    const data = await api.getNewsTech();
    res.send(data);
    console.log("Tech");
});
app.get('/ent', async (req, res) => {
    const data = await api.getNewsEnt();
    res.send(data);
    console.log("Entertainment");
})
app.get('/sports', async (req, res) => {
    const data = await api.getNewsSports();
    res.send(data);
    console.log("Sports");
})
app.get('/business', async (req, res) => {
    const data = await api.getNewsBusiness();
    res.send(data);
    console.log("Business");
})
app.post('/search', async (req, res) => {
    const search = req.body.search;
    // console.log("Search index value : " ,search);
    const data = await api.getNewsSearch(search);
    res.send(data);
    // console.log("Server index");
    // console.log("Search");
})

app.listen(port, () => console.log(`server running on port ${port}`));

