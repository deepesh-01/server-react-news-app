require('dotenv').config();
const axios = require('axios');
const apiKey = process.env.API_KEY;

const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`; 
const urlTech = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apiKey}`;
const urlEnt = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`;
const urlSports = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`;
const urlBusiness = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;

const getNews = async (res) => {
    try{
        value = await axios.get(url);
        return value.data.articles;
    }
    catch(err){
        console.log(err);
    }
    
}

const getNewsTech = async (res) => {
    try{
        value = await axios.get(urlTech);
        return value.data.articles;
    }
    catch(err){
        console.log(err);
    }
    
}

const getNewsEnt = async (res) => {
    try{
        value = await axios.get(urlEnt);
        return value.data.articles;
    }
    catch(err){
        console.log(err);
    }
}

const getNewsSports = async (res) => {
    try{
        value = await axios.get(urlSports);
        return value.data.articles;
    }
    catch(err){
        console.log(err);
    }
}

const getNewsBusiness = async (res) => {
    try{
        value = await axios.get(urlBusiness);
        return value.data.articles;
    }
    catch(err){
        console.log(err);
    }
}

const getNewsSearch = async (search) => {
    try{
        // console.log("Server API")
        // console.log("Seacrh Value is : ", search);
        value = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`);
        console.log("Search : ",search)
        return value.data.articles;
    }
    catch(err){
        console.log(err);
    }
}

exports.getNews=getNews;
exports.getNewsTech=getNewsTech;
exports.getNewsEnt=getNewsEnt;
exports.getNewsSports=getNewsSports;
exports.getNewsBusiness=getNewsBusiness;
exports.getNewsSearch=getNewsSearch;