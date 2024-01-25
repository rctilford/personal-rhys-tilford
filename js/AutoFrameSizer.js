// This code is designed to resize the iframe to the height of the content


framer = function() {
    let iframe = document.getElementsByTagName('iframe');
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}








