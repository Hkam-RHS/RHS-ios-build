//This function shows the full date as a string. Day name, Month name, Day number, Year. //
function showFull() {
  var d = new Date();
  var x = d.toDateString();
  document.getElementById('displayFull').innerHTML = x;
}
//This just shows the day number//
function getDayNumber() {
    var d = new Date();
    var n = d.getDate();
    document.getElementById('displayDayNumber').innerHTML = n;
}
//This shows the name of the day//
function getWeekDayName() {
     var x = new Date();
    var y = x.getDay();
    if (y === 0) {
        document.getElementById('displayDayName').innerHTML = 'SUNDAY';
    }
    else if (y === 1) {
        document.getElementById('displayDayName').innerHTML = 'MONDAY';
    }
    else if (y ===2) {
        document.getElementById('displayDayName').innerHTML = 'TUESDAY';
    }
    else if (y === 3) {
        document.getElementById('displayDayName').innerHTML = 'WEDNESDAY';
    }
    else if (y === 4) {
        document.getElementById('displayDayName').innerHTML = 'THURSDAY';
    }
    else if (y === 5) {
        document.getElementById('displayDayName').innerHTML = 'FRIDAY';
    }
    else {
        document.getElementById('displayDayName').innerHTML = 'SATURDAY';
    }

}
//This shows the month name//
function getMonthName() {
    var d = new Date();
    var n = d.getMonth();
    if (n === 0) {
      document.getElementById("displayMonthName").innerHTML = ' January';
    }
    else if (n === 1) {
      document.getElementById("displayMonthName").innerHTML = ' February';
    }
    else if (n === 2) {
      document.getElementById("displayMonthName").innerHTML = ' March';
    }
    else if (n === 3) {
      document.getElementById("displayMonthName").innerHTML = ' April';
    }
    else if (n === 4) {
      document.getElementById("displayMonthName").innerHTML = ' May';
    }
    else if (n === 5) {
      document.getElementById("displayMonthName").innerHTML = ' June';
    }
    else if (n === 6) {
      document.getElementById("displayMonthName").innerHTML = ' July';
    }
    else if (n === 7) {
      document.getElementById("displayMonthName").innerHTML = ' August';
    }
    else if (n === 8) {
      document.getElementById("displayMonthName").innerHTML = ' September';
    }
    else if (n === 9) {
      document.getElementById("displayMonthName").innerHTML = ' October';
    }
    else if (n === 10) {
      document.getElementById("displayMonthName").innerHTML = ' November';
    }
    else {
      document.getElementById("displayMonthName").innerHTML = ' December';
    }
}