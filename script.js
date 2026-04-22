let totalSlots = 50;
let availableSlots = 20;

const grid = document.getElementById("grid");
const slotText = document.getElementById("slots");
const msg = document.getElementById("msg");

let selectedSlot = null;

// LOGIN
function login() {
    let user = document.getElementById("username").value;

    if (user === "") {
        alert("Enter username!");
        return;
    }

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "block";

    createSlots();
}

// CREATE SLOTS
function createSlots() {
    grid.innerHTML = "";

    for (let i = 0; i < totalSlots; i++) {
        let div = document.createElement("div");
        div.classList.add("slot");
        div.innerText = i + 1;
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";

        if (i >= availableSlots) {
            div.classList.add("full");
        } else {
            div.onclick = function () {

                // remove previous selection
                let allSlots = document.querySelectorAll(".slot");
                allSlots.forEach(s => s.style.border = "none");

                selectedSlot = div;
                div.style.border = "3px solid yellow";
            };
        }

        grid.appendChild(div);
    }
}

// BOOK SLOT
function bookSlot() {
    if (!selectedSlot) {
        msg.innerText = "Please select a slot!";
        return;
    }

    if (availableSlots > 0) {
        selectedSlot.classList.add("full");
        selectedSlot.style.border = "none";
        selectedSlot = null;

        availableSlots--;
        slotText.innerText = availableSlots;

        msg.innerText = "Slot booked successfully!";
    } else {
        msg.innerText = "No slots available!";
    }
}