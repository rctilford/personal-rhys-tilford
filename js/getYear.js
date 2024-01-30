
// Get the current year and add it to the footer

let year = new Date().getFullYear().toString();

document.onload =   function() {

document.getElementsByClassName("copyright")[0].innerHTML.replace("© 2023 - " + year, "''");

}


var elements = document.getElementsByClassName("copyright");

console.log(year);