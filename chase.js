var date= new Date();
var day=date.getDay();
var month= date.getMonth();
var year=date.getFullYear()
var today=date.getDate();

switch (day) {
    case 0:
        document.getElementById("day").innerHTML= "Sunday";
        break;
    case 1:
        document.getElementById("day").innerHTML= "Monday";
        break;
    case 2:
        document.getElementById("day").innerHTML= "Tuesday";
        break;
    case 3:
        document.getElementById("day").innerHTML= "Wednesday";
        break;
    case 4:
        document.getElementById("day").innerHTML= "Thursday";
        break
    case 5:
        document.getElementById("day").innerHTML= "Friday";
        break;
    case 6:
        document.getElementById("day").innerHTML= "Saturday";
        break;
    default:
        break;
}

switch (month) {
    case 0:
        document.getElementById("month").innerHTML=`January ${today}, ${year}`;
        break;
        case 1:
        document.getElementById("month").innerHTML=`February ${today}, ${year}`;
        break;
        case 2:
        document.getElementById("month").innerHTML=`March ${today}, ${year}`;
        break;
        case 3:
        document.getElementById("month").innerHTML=`April ${today}, ${year}`;
        break;
        case 4:
        document.getElementById("month").innerHTML=`May ${today}, ${year}`;
        break;
        case 5:
        document.getElementById("month").innerHTML=`June ${today}, ${year}`;
        break;
        case 6:
        document.getElementById("month").innerHTML=`July ${today}, ${year}`;
        break;
        case 7:
        document.getElementById("month").innerHTML=`August ${today}, ${year}`;
        break;
        case 8:
        document.getElementById("month").innerHTML=`September ${today}, ${year}`;
        break;
        case 9:
        document.getElementById("month").innerHTML=`October ${today}, ${year}`;
        break;
        case 10:
        document.getElementById("month").innerHTML=`November ${today}, ${year}`;
        break;
        case 11:
        document.getElementById("month").innerHTML=`December ${today}, ${year}`;
        break;

    default:
        break;
}
console.log(day);