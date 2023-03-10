// function myFfuction() {
//     let person = prompt("What's your name", "F");
//     if (person != null) {
//       document.getElementById("demo").innerHTML =
//       `Hello ${person}`;
//     }
//   }

// add more JS
function myFfuction() {
  let text;
  let person = prompt("What's your name:", "F");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person;
  }
  document.getElementById("demo").innerHTML = text;
}