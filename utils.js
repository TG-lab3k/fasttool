function getCurrentTimeMillis(){
    return Date.now();
}

function convertMillisToGMT(millis) {
    let date = new Date(millis);
    return date.toUTCString();
}