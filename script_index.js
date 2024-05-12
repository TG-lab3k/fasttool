function convertTimestampToGMT(timestamp, offset) {
    var date = new Date(timestamp);
    var localOffset = date.getTimezoneOffset();
    var targetOffset = offset * 60;
    var offsetDiff = targetOffset - localOffset;
    date.setTime(date.getTime() + offsetDiff * 60 * 1000);
    return date.getTime();
}

function parseGMTOffset(gmtOffsetStr) {
    var offset = parseFloat(gmtOffsetStr.replace("GMT", ""));
    return offset;
}

function getCurrentUtcOffset() {
    var now = new Date();
    var timezoneOffset = now.getTimezoneOffset();
    var offsetHours = timezoneOffset / 60;
    var sign = offsetHours >= 0 ? '-' : '+';

    var absOffsetHours = Math.abs(offsetHours);
    var paddedOffsetHours = ('0' + absOffsetHours).slice(-2);

    var utcOffset = sign + paddedOffsetHours;
    return utcOffset
}

function boost() {
    var timestampDateTimebutton = document.querySelector('.timestamp-datetime-convert');
    timestampDateTimebutton.addEventListener('click', function () {
        var timestampInput = document.querySelector('.timestamp-datetime-text');
        var formatInput = document.querySelector('.timestamp-datetime-format');
        var gmtInput = document.querySelector('.timestamp-datetime-timezones');
        var timestampText = String(timestampInput.value);
        if (timestampText.trim() === '') {
            console.log('timestampText is null');
            return;
        }


        var timestamp = Number(timestampText);
        var formatText = String(formatInput.value);
        if (formatText.trim() === '') {
            formatText = 'YYYY-MM-DD HH:mm:ss';
        }

        var gmtText = String(gmtInput.value);
        var utcOffset = 0;
        if (gmtText.trim() !== '') {
            console.log(gmtText);
            utcOffset = parseGMTOffset(gmtText);
        }

        if(utcOffset === 0){
            utcOffset = getCurrentUtcOffset();
        }
        console.log('utcOffset', utcOffset);

        var momentObj = moment.unix(timestamp);
        var formattedTime = momentObj.utcOffset(utcOffset).format(formatText);
        var result = document.querySelector('.timestamp-datetime-result');
        result.innerHTML = formattedTime;
    });

    console.log('boost loaded!!');
};