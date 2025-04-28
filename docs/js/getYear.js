
// Get the current year and add it to the footer

let year = new Date().getFullYear().toString();

document.onload =   function() {

document.getElementById('copyright').innerText.replace("© 2023 - ", "© 2023 - " + year);

}


let elements = document.getElementById("copywright").

console.log(elements);
console.log(year);


