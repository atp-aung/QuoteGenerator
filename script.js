"use strict";
let newQuote = document.getElementById("new-quote");
let quoteHtml = document.getElementById("quote");
let author = document.getElementById("author");
let quotContanr = document.getElementById("quot-conta");
let loader = document.getElementById("loader");
let quoData = [];
let randQot = () => {
  loading();
  let quote = quoData[Math.floor(Math.random() * quoData.length)];
  quoteHtml.textContent = quote.text;
  author.textContent = quote.author;
  dataShow();
};
let loading = () => {
  loader.hidden = false;
  quotContanr.hidden = true;
};
let dataShow = () => {
  loader.hidden = true;
  quotContanr.hidden = false;
};
async function quoteGentor() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    let respon = await fetch(apiUrl);
    quoData = await respon.json();
    randQot();
  } catch (er) {
    console.log(er);
  }
}
quoteGentor();
newQuote.addEventListener("click", randQot);
