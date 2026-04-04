document.getElementById("btnPlus").addEventListener("click", increaseCount);
document.getElementById("btnMinus").addEventListener("click", decreaseCount);
document.getElementById("btnReset").addEventListener("click", resetCount);

let count = 0;

function updateCount() {
    document.getElementById("count").innerHTML = count;
}

function increaseCount() {
    count++;
    localStorage.setItem("count", count);
    updateCount();
}

function decreaseCount() {
    if ( count > 0 )
    {count--;}
    localStorage.setItem("count", count);
    updateCount();
}

function resetCount() {
    count = 0;
    localStorage.setItem("count", count);
    updateCount();
}

window.onload = function () {
    let saved = localStorage.getItem("count");
    if (saved !== null) {
        count = Number(saved);
    }
    updateCount();
};