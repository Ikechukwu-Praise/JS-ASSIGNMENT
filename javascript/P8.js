let score = prompt("ENTER YOUR SCORE");
if (score >= 80) {
  alert("EXCELLENT");
} else if (score >= 60) {
  alert("GOOD");
} else if (score >= 40) {
  alert("PASS");
} else if (score >= 0) {
  alert("FAIL");
} else if (score < 0) {
  alert("INVALID");
} else if (score > 100) {
  alert("INVALID");
}
