function randomiseNumbers() {
    $('.sensor .value span').each(function() {
        var text = $(this).text();
        var rndDigit = Math.round(Math.random() * 9);
        text = text.substring(0, text.length-1) + rndDigit;

        $(this).text(text);
    });
}

setInterval(randomiseNumbers, 2000);
randomiseNumbers();
