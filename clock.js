var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();




setInterval(
    function () {
        d = new Date();
        second = d.getSeconds() * 6;
         minute = d.getMinutes() * 6;
         hour = d.getHours() * 30;
         document.getElementById("s-hand").style.transform ="rotate(" + second +"deg)";
         document.getElementById("h-hand").style.transform ="rotate(" + hour +"deg)";
         document.getElementById("m-hand").style.transform ="rotate(" + minute +"deg)";

    }, 1000
);