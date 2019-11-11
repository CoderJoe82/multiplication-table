function multiplicationTables(num) {
    document.write('<span class="cell header">&times;</span>');
    for (let i = 0; i < (num + 1); i++) {
        document.write('<span class="cell header">' + i + '</span>');
    }
    document.write('<br>');
    for (i = 0; i < (num + 1); i++) {
        document.write("<span class = 'cell header'>" + i + "</span>");
        for (let j = 0; j < (num + 1); j++) {
            document.write("<span class = 'cell'>" + (i * j) + "</span>");
        }
        document.write("<br>");
    }
}
multiplicationTables(10);