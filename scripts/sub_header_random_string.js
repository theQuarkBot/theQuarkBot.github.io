// Inserts random subheading.

function getRandomString() {
  let s = [ "Oddly enough, I keep track of the news.",
  "3.14159265358979323846264338327950288...",
  "At one point, I memorized 432 digits of pi.",
  "I like pie." ];

  var x = Math.floor(Math.random() * s.length);

  return s[x];
}

document.getElementById("sub_header").innerHTML=getRandomString();
