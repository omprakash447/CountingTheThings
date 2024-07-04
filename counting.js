let count = 0;

const space = document.querySelector("#count")
const save = document.querySelector("#save")



function increment() {
    count = count + 1;
    space.innerHTML = count;
}

function decrement() {
    count = count - 1;
    space.innerHTML = count
}

function reset() {
    count = 0;
    space.innerHTML = count
}

function saved() {
    let countstr = count + " , ";
    save.innerHTML += countstr


}