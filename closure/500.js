function myFunction() {
    var x = "",
        i = 0;
    while (i < 5) {
        x = "The number is " + i + "<br>";
        (function(x, i) {
            setTimeout(() => console.log(x), 500 * i)
        })(x, i)
        i++;
    }

}
myFunction()