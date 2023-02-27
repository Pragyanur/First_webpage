function validateForm() {
    var errorMessage = 'The following errors were found:';
    if (document.getElementById('email').value.length == 0) {
        errorMessage += 'You must supply an email address';
        document.getElementById('email').value = 'enter something';
    }
    document.getElementById('email').innerHTML = errorMessage;
    alert(errorMessage);
}

function document() {
    var c = createCanvas(500, 500, WEBGL);
    document.getElementById('review').value = 5555;


}