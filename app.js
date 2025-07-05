var $j = jQuery.noConflict()

$j(function() { 
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if(xhr.status === 200) {
            document.getElementById('content').innerHTML = xhr.responseText;
            console.log('status 200')
        }
    };
    xhr.open('GET', 'https://kurs.com.ua', true);
    xhr.send('eur')
})


