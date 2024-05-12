function getCurrentTimeMillis(){
    return Date.now();
}

function convertMillisToGMT(millis) {
    let date = new Date(millis);
    return date.toUTCString();
}

function convertTimestampToGMT(timestamp, offset) {
    var date = new Date(timestamp);

    var localOffset = date.getTimezoneOffset(); // mins
    var targetOffset = offset * 60; 
    var offsetDiff = targetOffset - localOffset;
    date.setTime(date.getTime() + offsetDiff * 60 * 1000);
    
    return date.toLocaleString();
}