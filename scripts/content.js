const element = document.getElementById("quote");
const e2 = document.getElementById("quoter");
const quotes = [
  "The way to get started is to quit talking and begin doing.",
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  "If you're going through hell, keep going.",
  "It always seems impossible until it's done.",
  "Where your attention goes, your time goes.",
];
const quoters = [
  "Walt Disney",
  "Thomas A. Edison",
  "Winston Churchill",
  "Nelson Mandela",
  "Idowu Koyenikan",
];

const ind = Math.floor(Math.random() * quotes.length);
element.textContent = quotes[ind];
e2.textContent = '-'+quoters[ind];
