function multiplicationTables(num) {
    const tableHeadElement = document.createElement("span");
    tableHeadElement.className = "cell header";
    tableHeadElement.innerHTML = "&times;";
    const tableDestination = document.getElementById("tableHolder");
    tableDestination.appendChild(tableHeadElement);
    for (let i = 0; i < (num + 1); i++) {
        const tableHeadElement = document.createElement("span");
        tableHeadElement.className = "cell header";
        tableHeadElement.innerHTML = i;
        const tableDestination = document.getElementById("tableHolder");
        tableDestination.appendChild(tableHeadElement);
    }
    const breakCreator = document.createElement("br");
    tableDestination.appendChild(breakCreator);
    for (i = 0; i < (num + 1); i++) {
        const rowHeadElement = document.createElement("span");
        rowHeadElement.className = "cell header";
        rowHeadElement.innerHTML = i;
        const rowHeadDestination = document.getElementById("tableHolder");
        rowHeadDestination.appendChild(rowHeadElement);
        for (j = 0; j < (num + 1); j++) {
            const rowContentElement = document.createElement("span");
            rowContentElement.className = "cell changerCells";
            rowContentElement.innerHTML = i * j;
            const rowContentDestination = document.getElementById("tableHolder");
            rowContentDestination.appendChild(rowContentElement);
        }
        const breakCreator = document.createElement("br");
        rowHeadDestination.appendChild(breakCreator);
    }
}
multiplicationTables(10);

const tableChangeButton = document.getElementById("changeButton");
tableChangeButton.onclick = () => {
    const possibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const tableDestination = document.getElementById("tableHolder");
    tableDestination.innerHTML = "";
    for (i in possibleNumbers) {
        if (parseInt(document.getElementById("numberHolder").value) === possibleNumbers[i]) {
            multiplicationTables(parseInt(document.getElementById("numberHolder").value));
        }
    }
}

const oopsButton = document.getElementById("oopsButton");
oopsButton.onclick = () => {
    const tableDestination = document.getElementById("tableHolder");
    tableDestination.innerHTML = ""
    multiplicationTables(10);
}

const colorsButton = document.getElementById("colorsButton");
colorsButton.onclick = () => {
    let cellGrabber = document.getElementsByClassName('changerCells');
    for (i = 0; i < cellGrabber.length; i++) {
        cellGrabber[i].classList.add("discoTime");
    }
}

const stopColors = document.getElementById("stopColors");
stopColors.onclick = () => {
    let cellGrabber = document.getElementsByClassName('changerCells');
    for (i = 0; i < cellGrabber.length; i++) {
        cellGrabber[i].classList.remove("discoTime");
    }
}