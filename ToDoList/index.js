 // This function adds a task to the list with a number, complete, and delete buttons
// It also handles the display of error messages if the input is empty
let count = 1;

function task() {
    var input = document.getElementById("task");
    var ItemList = document.getElementById("list");
    var show = document.getElementById("show");
    show.innerText = "";
    var valid=/^[A-Za-z]+/

    if (input.value === "" ||!input.value.match(valid)) {
        show.innerText = "Please enter a task before adding it to the list.";
        show.style.color = "red";
        return;
    }


    // Create list item (li)
    var li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.marginBottom = "10px";

    // Number + Task text in span
    var span = document.createElement("span");
    span.innerText = `${count}. ${input.value}`;  // Manual numbering
    span.style.flex = "1";
    span.style.marginRight="20px"
 
    // Buttons container
    var buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";
    //buttonContainer.style.backgroundColor="green"

    // Complete button
    var complete = document.createElement("button");
    complete.innerText = "complete";
    complete.onclick = function () {
        span.style.textDecoration = "line-through";
        complete.disabled = true;
        complete.style.backgroundColor = "green";
    };

    // Delete button
    var del = document.createElement("button");
    del.innerText = "remove";
    del.onclick = function () {
        ItemList.removeChild(li);
        updateNumbers();  
    };

    buttonContainer.appendChild(complete);
    buttonContainer.appendChild(del);
     li.appendChild(span);
    li.appendChild(buttonContainer);
    ItemList.appendChild(li);

    input.value = "";
    count++;
}

// This function reassigns numbers after a task is deleted
function updateNumbers() {
    const listItems = document.getElementById("list").children;
    count = 1;
    for (let item of listItems) {
        const span = item.querySelector("span");
        const text = span.innerText.split(". ")[1]; // Remove old number
        span.innerText = `${count}. ${text}`;
        count++;
    }
}
