function calculateFare() {
  let age = prompt("ENTER YOUR AGE");
  if (age < 12) {
    alert("PAY N100");
  } else if (age < 17) {
    alert("PAY 200");
  } else if (age >= 18) {
    alert("PAY 300");
  }
}

calculateFare();
