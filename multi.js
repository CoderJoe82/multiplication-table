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
let tableHolder = document.getElementById("multiHolder");
tableHolder.innerHTML = multiplicationTables(10);
let functionButton = document.getElementById("fCButton");
functionButton.onclick = function () {
    let functionValue = document.getElementById("functionChangeField").value;
    let multiDiv = document.getElementById("multiHolder");
    if (functionValue > 20) {
        alert("Hey now! Let's not go crazy!");
    } else {
        multiDiv.innerHTML = " ";
        multiDiv.innerHTML = multiplicationTables(functionValue);
    }
}