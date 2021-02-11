// .page-header > h1:nth-child(1)
// const cheerio = require("cheerio");
// const axios = require("axios");
// const url = "http://books.toscrape.com/catalogue/category/books/mystery_3/index.html";

// async function getGenre() {
//   try {
//     const response = await axios.get(url);
//     const document = cheerio.load(response.data);
//     const genre = document("h1").text();
//     console.log(genre);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getGenre();;



// import cheerio from "cheerio";
// import axios from "axios";
// import json2csv from "json2csv";

// const url =
//   "http://books.toscrape.com/catalogue/category/books/mystery_3/index.html";
// const arr = [];
// const getTitle = async () => {
//   try {
//     // const response = await axios.get(url);
//     const res = await axios.get(url);
//     // const document = cheerio.load(res.data);
//     const doc = cheerio.load(res.data);
//     const genre = doc("h1").text();
//     const htm = doc("li.col-xs-6:nth-child(2) > article:nth-child(1) > div:nth-child(4) > p:nth-child(1)").text();
//     console.log(htm);
//     console.log(genre);
//     // arr.push(htm,genre);
//     // console.log(arr);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getTitle();


// const cheerio = require("cheerio");
// const axios = require("axios");
// const mystery = "http://books.toscrape.com/catalogue/category/books/mystery_3/index.html";
// const books_data = [];
// async function getBooks(url) {
//   try {
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);
 
//     const books = $("article");
//     books.each(function () {
//       title = $(this).find("h3 a").text();
//       price = $(this).find(".price_color").text();
//       stock = $(this).find(".availability").text().trim();
//       books_data.push({ title, price, stock }); //store in array
//     });
//     console.log(books_data);//print the array
//   } catch (err) {
//     console.error(err);
//   }
// }
// getBooks(mystery);;