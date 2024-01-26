// This code is designed to resize the iframe to the height of the content


    // Selecting the iframe element
    let iframe = document.getElementsByTagName("iframe");
    
    // Adjusting the iframe height onload event
    iframe.onload = function(){
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }









