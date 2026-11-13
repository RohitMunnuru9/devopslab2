function addStudent() {
    let name = document.getElementById("name").value;
    if (name == "") return alert("Enter  name");
    document.getElementById("list").innerHTML += "<li>" + name + "</li>";
}