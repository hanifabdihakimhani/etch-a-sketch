const container = document.querySelector('#container');

function makeBox (cols, rows) {
    cols += 1;
    for(i = 0; i <= (cols*rows); i++) {
        const div = document.createElement("div");
        div.setAttribute('class', 'cell');

        if(i % cols === 0) {
            div.style.cssText = 'border: 0; height: 0; width: 100%';
        }else {
            div.style.cssText = 'border: 1px solid black; height: 25px; width: 25px';
        }

        container.append(div);
    }
};

makeBox(16,16);
