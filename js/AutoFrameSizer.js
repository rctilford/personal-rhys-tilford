// This code is designed to resize the iframe to the height of the content


// Selecting the iframe element
let iframe = document.getElementsByClassName("contactme")[0];

// Listen for message from the iframe
window.addEventListener('message', function(event) {
    // Check if height was sent in message
    if (event.data.height) {
        iframe.style.height = event.data.height + 'px';
    }
});// Inside the iframe content
window.onload = function() {
    window.parent.postMessage({
        'height': document.body.scrollHeight
    }, 'https://docs.google.com');
};







