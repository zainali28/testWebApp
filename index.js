var enlarged = Array(9).fill(false);
var clicked = Array(9).fill(true);
var capture = Array(9).fill(false);

function keyStrokeDown(event) {
    const key = event.key;
    var boxNum = (key >= 1 && key <= 9) ? (key - 1) : null;
    const elem = document.getElementsByClassName('red-box');
    (boxNum !== null) && (elem[boxNum].setAttribute(
        "style", `z-index: ${enlarged[boxNum] ? "10" : "0"}; transform: scale(${enlarged[boxNum] ? "2" : "1.1"}); background-color: ${enlarged[boxNum] ? "orangered" : "orange"}; box-shadow: ${enlarged[boxNum] ? "orange" : "orangered"} ${enlarged[boxNum] ? "0px" : "10px"} ${enlarged[boxNum] ? "0px" : "10px"}; content-visibility: visible;`
    ));
}

function keyStrokeUp(event) {
    const key = event.key;
    var boxNum = (key >= 1 && key <= 9) ? (key - 1) : null;
    const elem = document.getElementsByClassName('red-box');
    capture[boxNum] = !clicked[boxNum] && true;
    enlarged[boxNum] = !enlarged[boxNum];
    clicked[boxNum] = !clicked[boxNum];
    (boxNum !== null) && (elem[boxNum].setAttribute(
        "style", `z-index: 10; transform: scale(${enlarged[boxNum] ? "2" : "1"}); content-visibility: ${enlarged[boxNum] ? "visible" : "hidden"}; background-color: ${enlarged[boxNum] ? "orangered" : "orange"}; box-shadow: ${enlarged[boxNum] ? "orange" : "orangered"} ${enlarged[boxNum] ? "0px" : "10px"} ${enlarged[boxNum] ? "0px" : "10px"};`
    ));

    if (boxNum !== null) {
        for (let i=0; i<9; i++) {
            (i !== boxNum) && (enlarged[i] = false);
            (i !== boxNum) && (clicked[i] = true);
            (i !== boxNum) && (capture[i] = false);
    
            (i !== boxNum) && elem[i].setAttribute(
                "style", `z-index: ${enlarged[i] ? "10" : "0"}; transform: scale(${enlarged[i] ? "2" : "1"}); content-visibility: ${enlarged[i] ? "visible" : "hidden"}; background-color: ${enlarged[i] ? "orangered" : "orange"};`
            );
        }
    }
}

document.addEventListener('keydown', keyStrokeDown);
document.addEventListener('keyup', keyStrokeUp);


function onButtonRelease(boxNum) {
    const elem = document.getElementsByClassName('red-box');
    capture[boxNum] = !clicked[boxNum] && true;
    enlarged[boxNum] = !enlarged[boxNum];
    clicked[boxNum] = !clicked[boxNum];
    elem[boxNum].setAttribute(
        "style", `z-index: 10; transform: scale(${enlarged[boxNum] ? "2" : "1"}); content-visibility: ${enlarged[boxNum] ? "visible" : "hidden"}; background-color: ${enlarged[boxNum] ? "orangered" : "orange"}; box-shadow: ${enlarged[boxNum] ? "orange" : "orangered"} ${enlarged[boxNum] ? "0px" : "10px"} ${enlarged[boxNum] ? "0px" : "10px"};`
    );

    for (let i=0; i<9; i++) {
        (i !== boxNum) && (enlarged[i] = false);
        (i !== boxNum) && (clicked[i] = true);
        (i !== boxNum) && (capture[i] = false);

        (i !== boxNum) && elem[i].setAttribute(
            "style", `z-index: ${enlarged[i] ? "10" : "0"}; transform: scale(${enlarged[i] ? "2" : "1"}); content-visibility: ${enlarged[i] ? "visible" : "hidden"}; background-color: ${enlarged[i] ? "orangered" : "orange"};`
        );
    }
}
 
function onHover(boxNum) {
    const elem = document.getElementsByClassName('red-box');
    elem[boxNum].setAttribute(
        "style", `z-index: ${enlarged[boxNum] ? "10" : "0"}; transform: scale(${enlarged[boxNum] ? "2" : "1.1"}); background-color: ${enlarged[boxNum] ? "orangered" : "orange"}; box-shadow: ${enlarged[boxNum] ? "orange" : "orangered"} ${enlarged[boxNum] ? "0px" : "10px"} ${enlarged[boxNum] ? "0px" : "10px"}; content-visibility: visible;`
    );
}

function onLeave(boxNum) {
    const elem = document.getElementsByClassName('red-box');
    elem[boxNum].setAttribute(
        "style", `z-index: ${enlarged[boxNum] ? "10" : "0"}; transform: scale(${enlarged[boxNum] ? "2" : "1"}); content-visibility: ${enlarged[boxNum] ? "visible" : "hidden"}; background-color: ${enlarged[boxNum] ? "orangered" : "orange"}; box-shadow: ${enlarged[boxNum] ? "orange" : "orangered"} 0px 0px;`
    );
}