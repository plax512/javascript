function myFunction() {
    var str = ["alpha", "beta", "gamma"];
    var res = str.charAt(0).toUpperCase() + str.slice(1);
    document.getElementById("demo").innerHTML = res;
}