// Select color input

var chooseColor = document.getElementById('colorPicker');

var shape = document.getElementById('pixelCanvas');

var height = document.getElementById('inputHeight').value;

var width = document.getElementById('inputWidth').value;

// Select size input

var chooseSize = document.getElementById('sizePicker');

chooseSize.addEventListener('click', (event) => {
    event.preventDefault();

    const tempheight = document.getElementById('inputHeight').value;
    const tempwidth = document.getElementById('inputWidth').value;

    shape.firstElementChild.remove();
    makeGrid(tempheight, tempwidth);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

    for (let r = 0; r < height; r++) {
        let row = shape.insertRow(r);

        for (let c = 0; c < width; c++) {
            let cell = row.insertCell(c);

            cell.addEventListener('click', (event) => {
                cell.style.backgroundColor = chooseColor.value;
            });
        }
    }
}

makeGrid(height, width);
