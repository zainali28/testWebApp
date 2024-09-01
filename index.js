var enlarged = Array(9).fill(false);
var clicked = Array(9).fill(true);
var capture = Array(9).fill(false);
var disabled = Array(9).fill(false);

function keyStrokeDown(event) {
    const key = event.key;
    var boxNum = (key >= 1 && key <= 9) ? (key - 1) : null;
    document.getElementsByName("Box").forEach((element, index) => { ((index === boxNum) & capture[boxNum]) && (element.disabled = true); });
    const elem = document.getElementsByClassName('red-box');
    !((boxNum !== null) & (document.getElementsByName("Box")[boxNum].disabled)) && (elem[boxNum].setAttribute(
        "style", `width: ${enlarged[boxNum] ? "500px" : "100px"}; height: ${enlarged[boxNum] ? "500px" : "100px"}; background-color: ${enlarged[boxNum] ? "orangered" : "orange"}; box-shadow: ${enlarged[boxNum] ? "orange" : "orangered"} ${enlarged[boxNum] ? "20px" : "10px"} ${enlarged[boxNum] ? "20px" : "10px"}; opacity: ${capture[boxNum] & clicked[boxNum] ? "0.2" : "1"}; content-visibility: visible;`
    ));

    (key === "r" ) && restart(); 
}

function keyStrokeUp(event) {
    const key = event.key;
    var boxNum = (key >= 1 && key <= 9) ? (key - 1) : null;
    document.getElementsByName("Box").forEach((element, index) => { ((index === boxNum) & capture[boxNum]) && (element.disabled = true); });
    const elem = document.getElementsByClassName('red-box');
    capture[boxNum] = !clicked[boxNum] && true;
    enlarged[boxNum] = !enlarged[boxNum];
    clicked[boxNum] = !clicked[boxNum];
    !((boxNum !== null) & (document.getElementsByName("Box")[boxNum].disabled)) && (elem[boxNum].setAttribute(
        "style", `width: ${enlarged[boxNum] ? "500px" : "100px"}; height: ${enlarged[boxNum] ? "500px" : "100px"}; background-color: ${enlarged[boxNum] ? "orangered" : "orange"}; box-shadow: ${enlarged[boxNum] ? "orange" : "orangered"} 0px 0px; opacity: ${clicked[boxNum] ? "0.2" : "1"};`
    ));
}

document.addEventListener('keydown', keyStrokeDown);
document.addEventListener('keyup', keyStrokeUp);

function restart() {
    const elem = document.getElementsByClassName('red-box');
    enlarged = Array(9).fill(false);
    clicked = Array(9).fill(true);
    capture = Array(9).fill(false);
    document.getElementsByName("Box").forEach((element) => { (element.disabled = false); });
    
    for(let i = 0; i < 9; i++) {
        elem[i].setAttribute(
            "style", `width: 100px; height: 100px; background-color: orange; opacity: 1;`
        );
    }
}

function onClick(boxNum) {
    document.getElementsByName("Box").forEach((element, index) => { ((index === boxNum) & capture[boxNum]) && (element.disabled = true); });
    const elem = document.getElementsByClassName('red-box');
    capture[boxNum] = !clicked[boxNum] && true;
    enlarged[boxNum] = !enlarged[boxNum];
    clicked[boxNum] = !clicked[boxNum];
    elem[boxNum].setAttribute(
        "style", `width: ${enlarged[boxNum] ? "500px" : "100px"}; height: ${enlarged[boxNum] ? "500px" : "100px"}; background-color: ${enlarged[boxNum] ? "orangered" : "orange"}; box-shadow: ${enlarged[boxNum] ? "orange" : "orangered"} ${enlarged[boxNum] ? "20px" : "10px"} ${enlarged[boxNum] ? "20px" : "10px"}; opacity: ${clicked[boxNum] ? "0.2" : "1"};`
    );
}

function onHover(boxNum) {
    document.getElementsByName("Box").forEach((element, index) => { ((index === boxNum) & capture[boxNum]) && (element.disabled = true); });
    const elem = document.getElementsByClassName('red-box');
    elem[boxNum].setAttribute(
        "style", `width: ${enlarged[boxNum] ? "500px" : "100px"}; height: ${enlarged[boxNum] ? "500px" : "100px"}; background-color: ${enlarged[boxNum] ? "orangered" : "orange"}; box-shadow: ${enlarged[boxNum] ? "orange" : "orangered"} ${enlarged[boxNum] ? "20px" : "10px"} ${enlarged[boxNum] ? "20px" : "10px"}; opacity: ${capture[boxNum] & clicked[boxNum] ? "0.2" : "1"}; content-visibility: visible;`
    );
}

function onLeave(boxNum) {
    document.getElementsByName("Box").forEach((element, index) => { ((index === boxNum) & capture[boxNum]) && (element.disabled = true); });
    const elem = document.getElementsByClassName('red-box');
    elem[boxNum].setAttribute(
        "style", `width: ${enlarged[boxNum] ? "500px" : "100px"}; height: ${enlarged[boxNum] ? "500px" : "100px"}; background-color: ${enlarged[boxNum] ? "orangered" : "orange"}; box-shadow: ${enlarged[boxNum] ? "orange" : "orangered"} 0px 0px; opacity: ${capture[boxNum] & clicked[boxNum] ? "0.2" : "1"};`
    );
}