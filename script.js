"use strict";
let quoData = [];
async function quoteGentor() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    let respon = await fetch(apiUrl);
    quoData = await respon.json();
    console.log(quoData[Math.trunc(Math.random() * quoData.length)]);
  } catch (er) {
    console.log(er);
  }
}
quoteGentor();
