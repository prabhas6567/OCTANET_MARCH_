function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = input;
    ul.appendChild(li);

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        ul.removeChild(li);
    };
    li.appendChild(deleteBtn);

    document.getElementById("taskInput").value = "";
}
