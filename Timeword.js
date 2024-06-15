function timeToWords(time) {
    const [hour, minute] = time.split(':').map(Number);

    const numberToWords = (num) => {
        const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty'];

        if (num < 10) return ones[num];
        if (num >= 11 && num <= 19) return teens[num - 11];
        if (num % 10 === 0) return tens[num / 10 - 1];
        return tens[Math.floor(num / 10) - 1] + ' ' + ones[num % 10];
    };

    if (time === '00:00') return 'midnight';
    if (time === '12:00') return 'noon';

    let hourWord;
    if (hour === 0 || hour === 12) {
        hourWord = hour === 0 ? 'twelve' : 'twelve';
    } else if (hour > 12) {
        hourWord = numberToWords(hour - 12);
    } else {
        hourWord = numberToWords(hour);
    }

    let minuteWord = minute === 0 ? "o’clock" : numberToWords(minute);

    const period = hour < 12 ? 'am' : 'pm';

    return `${hourWord} ${minuteWord} ${period}`.trim();
}

module.exports = timeToWords;
