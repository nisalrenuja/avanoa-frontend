export function mapTimeStr2Num(timeStr) {
    const timeStrArr = timeStr.split(" ");
    if (timeStrArr[0] === "උදෑසන")
        return parseInt(timeStrArr[1]);
    return parseInt(timeStrArr[1]) + 12;
}