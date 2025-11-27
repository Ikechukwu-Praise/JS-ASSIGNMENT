function checkGrade() {
  let score = prompt("CHECK GRADE (Enter your score)");

  if (score >= 70) {
    alert("A - Excellent! 🎉");
  } else if (score >= 60) {
    alert("B - Good job! 🎊");
  } else if (score >= 50) {
    alert("C - Not bad! 😊");
  } else if (score >= 45) {
    alert("D - You passed 😒");
  } else {
    alert("F - Failed 🤦‍♂️");
  }
}

checkGrade();
