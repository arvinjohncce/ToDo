$(document).ready(function() {
    $("button").click(function() {

        var user = $("#username").val();
        var admin = "admin"
        var pass = "12345";
        var pas = $("#password").val();
        if (user == admin && pas == pass) {
            window.location.href = "home.html"
            return false;
        } else {
            alert("Username/Password is incorrect");
        }
    });
});
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easition: 5250,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        // targets: '.ml3',
        // opacity: 0,
        // duration: 1000,
        // easing: "easeOutExpo",
        // delay: 1000
    });


function preventBack() {
    window.history.forward();

}
setTimeout("preventBack()", 0);
window.onunload = function() {
    null;
}