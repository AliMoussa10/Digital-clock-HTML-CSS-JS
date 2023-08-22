//JS
function show() {
    var today = new Date();

    //    Date 
    var weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    var wD = today.getDay(); document.getElementById("wDay").innerHTML = weekDays[wD];

    var D = today.getDate();
    if (D < 10) {
        D = "0" + D

    }
    document.getElementById("Date").innerHTML = D;

     //    Month 
    var monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var mon = today.getMonth();
    document.getElementById("month").innerHTML = monthList[mon];

    var Ye = today.getFullYear();
    document.getElementById('year').innerHTML = Ye;


    // TIME
    var Hour = today.getHours();
    if (Hour < 10) {
        Hour = "0" + Hour;
    }
    document.getElementById('hour').innerHTML = Hour;


    var Min = today.getMinutes();
    if (Min < 10) {
        Min = "0" + Min;
    }
    document.getElementById('min').innerHTML = Min;


    var Sec = today.getSeconds();
    if (Sec < 10) {
        Sec = "0" + Sec;
    }
    document.getElementById('sec').innerHTML = Sec;

    var c = Hour < 12 ? "AM" : "PM";
    document.getElementById("pe").innerHTML = c;


}

show();
setInterval(show, 1000);

