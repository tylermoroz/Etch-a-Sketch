const container = document.querySelector("#container");

function makeColumns() {
    for( let i = 0; i <= 15; i++) {
        let columns = document.createElement('div');
        columns.style.width = '35px';
        columns.style.height = '592px';
        columns.style.margin = '0px';
        columns.style.padding= '0px';
        columns.style.float = 'left';
        return columns;
    }
}

function makeRows() {
    for (let i = 0; i <= 15; i++) {
        let cells = document.createElement('div');
        cells.style.background = 'white';
        cells.style.width = "35px";
        cells.style.height = "35px";
        cells.style.border = "1px solid black";
        cells.style.margin = '0px';
        cells.style.padding = '0px';
        return cells;
    }
}
 
function makeGrid() {
    for (let i = 0; i <= 15; i++) {
       let columns = container.appendChild(makeColumns());
       for(let i = 0; i <= 15; i++) {
        columns.appendChild(makeRows());

       }
    }  
}

makeGrid();