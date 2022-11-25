function main(){
    console.log("WE HAVE JS!");
    setCurrentTime();
}

setInterval(function setCurrentTime(){
    var clockElement = document.getElementById("current-time");
    var timeNow = new Date()
    var currentTime = timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
    //  console.log(currentTime)
    clockElement.innerHTML = currentTime;
    updateWordsTime()
}, 1000);

function updateWordsTime(){
    var pToSet = document.getElementById("words-time");
    var currentTime = new Date();
    var timeToPrint = getMinute(currentTime) + " " + getHour(currentTime);
    
    pToSet.innerHTML = timeToPrint;
}


function getHour(currentTime){
    var hourNumb = currentTime.getHours();
    var hour;
    switch (hourNumb) {
        case 1:
        case 13:
            hour = "one"
            break;
        case 2:
        case 14:
            hour = "two"
            break;
        case 3:
        case 15:
            hour = "three"
            break;
        case 4:
        case 16:
            hour = "four"
            break;
        case 5:
        case 17:
            hour = "five"
            break;
        case 6:
        case 18:
            hour = "four"
            break;
        case 7:
        case 19:
            hour = "seven"
            break;
        case 8:
        case 20:
            hour = "eight"
            break;
        case 9:
        case 21:
            hour = "nine"
            break;
        case 10:
        case 22:
            hour = "ten"
            break;
        case 11:
        case 23:
            hour = "eleven"
            break;
        case 12:
        case 0:
            hour = "twelve"
            break;
        default:
            break;
    }
    return hour;
}

function getMinute(currentTime){
    var minuteNumb = currentTime.getMinutes();
    var mins;
    var ending;
    switch (minuteNumb) {
        case 1:
            mins = "one";
            ending = 1;
            break;
        case 2:
            mins = "two";
            ending = 2;
            break;
        case 3:
            mins = "three";
            ending = 2;
            break;
        case 4:
            mins = "four";
            ending = 2;
            break;
        case 5:
            mins = "five";
            ending = 2;
            break;
        case 5:
            mins = "five";
            ending = 2;
            break;
        case 6:
            mins = "six";
            ending = 2;
            break;
        case 7:
            mins = "seven";
            ending = 2;
            break;
        case 8:
            mins = "eight";
            ending = 2;
            break;
        case 9:
            mins = "nine";
            ending = 2;
            break;
        case 10:
            mins = "ten";
            ending = 2;
            break;
        case 11:
            mins = "eleven";
            ending = 2;
            break;
        case 12:
            mins = "twelve";
            ending = 2;
            break;
        case 13:
            mins = "thirteen";
            ending = 2;
            break;
        case 14:
            mins = "fourteen";
            ending = 2;
            break;
        case 15:
            mins = "quarter";
            ending = 3;
            break;
        case 16:
            mins = "sixteen";
            ending = 2;
            break;
        case 17:
            mins = "seventeen";
            ending = 2;
            break;
        case 18:
            mins = "eighteen";
            ending = 2;
            break;
        case 19:
            mins = "nineteen";
            ending = 2;
            break;
        case 20:
            mins = "twenty";
            ending = 2;
            break;
        case 21:
            mins = "twenty one";
            ending = 2;
            break;
        case 22:
            mins = "twenty two";
            ending = 2;
            break;
        case 23:
            mins = "twenty three";
            ending = 2;
            break;
        case 24:
            mins = "twenty four";
            ending = 2;
            break;
        case 25:
            mins = "twenty five";
            ending = 2;
            break;
        case 26:
            mins = "twenty six";
            ending = 2;
            break;
        case 27:
            mins = "twenty seven";
            ending = 2;
            break;
        case 28:
            mins = "twenty eight";
            ending = 2;
            break;
        case 29:
            mins = "twenty nine";
            ending = 2;
            break;
        case 30:
            mins = "half";
            ending = 3;
            break;
        case 31:
            mins = "thirty one";
            ending = 2;
            break;
        case 32:
            mins = "thirty two";
            ending = 2;
            break;
        case 33:
            mins = "thirty three";
            ending = 2;
            break;
        case 34:
            mins = "thirty four";
            ending = 2;
            break;
        case 35:
            mins = "thirty five";
            ending = 2;
            break;
        case 36:
            mins = "thirty six";
            ending = 2;
            break;
        case 37:
            mins = "thirty seven";
            ending = 2;
            break;
        case 38:
            mins = "thirty eight";
            ending = 2;
            break;
        case 39:
            mins = "thirty nine";
            ending = 2;
            break;
        case 40:
            mins = "twenty";
            ending = 4;
            break;
        case 41:
            mins = "forty one";
            ending = 2;
            break;
        case 42:
            mins = "forty two";
            ending = 2;
            break;
        case 43:
            mins = "forty three";
            ending = 2;
            break;
        case 44:
            mins = "forty four";
            ending = 2;
            break;
        case 45:
            mins = "quarter";
            ending = 5;
            break;
        case 46:
            mins = "forty six";
            ending = 2;
            break;
        case 47:
            mins = "forty seven";
            ending = 2;
            break;
        case 48:
            mins = "forty eight";
            ending = 2;
            break;
        case 49:
            mins = "forty nine";
            ending = 2;
            break;
        case 50:
            mins = "ten";
            ending = 4;
            break;
        case 51:
            mins = "fifty one";
            ending = 2;
            break;
        case 52:
            mins = "fifty two";
            ending = 2;
            break;
        case 53:
            mins = "fifty three";
            ending = 2;
            break;
        case 54:
            mins = "fifty four";
            ending = 2;
            break;
        case 55:
            mins = "five";
            ending = 4;
            break;
        case 56:
            mins = "four";
            ending = 4;
            break;
        case 57:
            mins = "three";
            ending = 4;
            break;
        case 58:
            mins = "two";
            ending = 4;
            break;
        case 59:
            mins = "one";
            ending = 4;
            break;
        case 0:
            mins = "";
            ending = 0;
            break;
        default:
            mins = "undefined;"
            ending = 0;
            break;
    }
    var endingText;
    switch(ending){
        case 0:
            endingText = " ";
        case 1:
            endingText = "minute past";
            break;
        case 2:
            endingText = "minutes past";
            break;
        case 3:
            endingText = "past";
            break;
        case 4:
            endingText = "minutes to";
            break;
        case 5:
            endingText = "to";
            break;
    }
    var retString = mins.concat(" ", endingText);
    return retString;
}

main()