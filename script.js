"use strict";
let quoData = [];
let randQuot = () => {
  let quot = quoData[Math.trunc(Math.random() * quoData.length)];
  console.log(quot);
};
async function quoteGentor() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    let respon = await fetch(apiUrl);
    quoData = await respon.json();
    randQuot();
  } catch (er) {
    console.log(er);
  }
}
quoteGentor();
