const fruits = ["🍎", "🍌", "🍇", "🍓", "🍊", "🍐", "🍉", "🍒", "🍍", "🍑"];
let pushIndex = 0; // Current index for push button
let unshiftIndex = 0; // Current index for unshift button

function renderArray() {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "[" + fruits.join(", ") + "]";
}

document.getElementById("pushBtn").addEventListener("click", function() {
    fruits.push(fruits[pushIndex]);
    pushIndex = (pushIndex + 1) % fruits.length; // Increment the index for the next fruit
    renderArray();
});

document.getElementById("unshiftBtn").addEventListener("click", function() {
    fruits.unshift(fruits[unshiftIndex]);
    unshiftIndex = (unshiftIndex + 1) % fruits.length; // Increment the index for the next fruit
    renderArray();
});

document.getElementById("insertBtn").addEventListener("click", function() {
    const index = document.getElementById("insertIndex").value;

    if (index >= 1 && index <= 10) {
        fruits.splice(index - 1, 0, fruits[pushIndex]);
        pushIndex = (pushIndex + 1) % fruits.length; // Increment the index for the next fruit
        renderArray();
    } else {
        alert("Invalid index. Please enter a number between 1 and 10.");
    }
});

document.getElementById("popBtn").addEventListener("click", function() {
    fruits.pop();
    renderArray();
});

document.getElementById("shiftBtn").addEventListener("click", function() {
    fruits.shift();
    renderArray();
});

document.getElementById("removeBtn").addEventListener("click", function() {
    const index = document.getElementById("removeIndex").value;

    if (index >= 1 && index <= 10) {
        fruits.splice(index - 1, 1);
        renderArray();
    } else {
        alert("Invalid index. Please enter a number between 1 and 10.");
    }
});

// Initial rendering of the array
renderArray();