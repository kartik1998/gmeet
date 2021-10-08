#!/usr/bin/env node
const open = require("open");

const baseUrl = "https://g.co/meet";

/**
 * @returns {url} google meets link
 */
function computeGoogleMeetsLink() {
  if (process.argv.length === 3 && process.argv[2].length >= 1)
    return `${baseUrl}/${process.argv[2]}`;
  let address = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 7; i++)
    address += characters.charAt(Math.floor(Math.random() * characters.length));
  return `${baseUrl}/${address}`;
}

const url = computeGoogleMeetsLink();
console.log(url);
open(url);
