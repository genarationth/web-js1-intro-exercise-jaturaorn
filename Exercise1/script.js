function myFfuction() {
    let person = prompt("What your name", "F");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      `Hello ${person}`;
    }
  }