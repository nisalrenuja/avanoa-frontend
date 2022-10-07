export function mapTimeStr2Timestamp(timeStr) {
    const timeStrArr = timeStr.trim().split(" ");
    var time = 0;
    if (timeStrArr[0] === "උදෑසන")
        time = parseInt(timeStrArr[1]);
    else time = parseInt(timeStrArr[1]) + 12;
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(time);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);
    var timestamp = tomorrow.getTime();
    if (time > now.getHours()) {
        now.setHours(time);
        now.setMinutes(0);
        now.setSeconds(0);
        timestamp = now.getTime();
    }
    return timestamp;
}