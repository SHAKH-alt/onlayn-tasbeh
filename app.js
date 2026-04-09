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

const btn = document.getElementById("btnPlus");

btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "#e74c3c";
});

btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "#0b62d3e8";
});

const btn2 = document.getElementById("btnMinus");

btn2.addEventListener("mouseover", () => {
  btn2.style.backgroundColor = "#0b62d3e8";
});

btn2.addEventListener("mouseout", () => {
  btn2.style.backgroundColor = "#e74c3c";
});

const btn3 = document.getElementById("btnReset");

btn3.addEventListener("mouseover", () => {
  btn2.style.backgroundColor = "#9f56de";
  btn.style.backgroundColor = "#9f56de";
});

btn3.addEventListener("mouseout", () => {
  btn2.style.backgroundColor = "#e74c3c";
  btn.style.backgroundColor = "#0b62d3e8";
});