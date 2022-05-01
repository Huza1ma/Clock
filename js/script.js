function clock(){
    var Time = new Date();
    var hrs = Time.getHours();
    var min = Time.getMinutes();
    var sec = Time.getSeconds();
    var ses = document.getElementById('ses');

    if(hrs > 12){
        ses.innerHTML = "PM";
    }

    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}

setInterval(clock, 10);