const button = document.querySelector("button");


button.addEventListener('click', function(){
    const container = document.querySelector("#container");
    let input = prompt("How many squares per side?", Number());
    let cellWidth = (560 / input);
    let cellHeight = ((592 / input) - 2);

    if(input > 100){
        alert("Grid must be less than 100 squares per side");
        input = prompt("How many squares per side?", Number());
        cellWidth = (560 / input);
        cellHeight = ((592 / input) - 2);
    }

    function makeColumns() {
        for( let i = 0; i < input; i++) {
            let columns = document.createElement('div');
            columns.style.width = `${cellWidth}px`;
            columns.style.height = '592px';
            columns.style.margin = '0px';
            columns.style.padding= '0px';
            columns.style.float = 'left';
            return columns;
        }
    }
    
    function makeRows() {
        for (let i = 0; i < input; i++) {
            let cells = document.createElement('div');
            cells.style.width = `${cellWidth}px`;
            cells.style.height = `${cellHeight}px`;
            cells.style.border = "1px solid black";
            cells.style.margin = '0px';
            cells.style.padding = '0px';
            cells.addEventListener("mouseover", function(){
                const randomColor = '#' + (0x1000000 + Math.floor(Math.random() * 0x1000000)).toString(16).substr(1);
                cells.style.background = randomColor;
            });
            button.addEventListener('click', function(){
                cells.style.background = 'white';
            })
            return cells;
        }
    }
    
    function makeGrid() {
        for (let i = 0; i < input; i++) {
           let columns = container.appendChild(makeColumns());
           for(let i = 0; i < input; i++) {
            columns.appendChild(makeRows());
           }
           button.addEventListener('click', function(){
            if(makeGrid){
                columns.remove();
            }
        }) 
        } 
    }
    
    makeGrid();
    

})
