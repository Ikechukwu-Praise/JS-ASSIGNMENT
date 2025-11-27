function trafficLight() {
  let trafficlight = prompt("ENTER A COLOR (red, yellow, or green)");

  if (trafficlight === "red") {
    alert("STOP");
  } else if (trafficlight === "yellow") {
    alert("READY");
  } else if (trafficlight === "green") {
    alert("GO");
  } else {
    alert("INVALID COLOR");
  }
}

trafficLight();
