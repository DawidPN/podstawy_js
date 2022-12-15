function timer()
{
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var day = date.getDate();
    var dayLong = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
   
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;
   
    var days = new Array("niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota");
    var months = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia");
   
    var showDate = "Dzisiaj jest " + days[dayLong] + ', ' + day + ' ' + months[month] + ' ' + year + " roku.<br />Godzina " + hour + ':' + minute + ':' + second;
    document.getElementById("clock").innerHTML = showDate;
   
    setTimeout(timer, 1000);            
} 