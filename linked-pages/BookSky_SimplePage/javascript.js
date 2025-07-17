var plusbtn = document.getElementById("plusbtn")
var poppupoverlay = document.querySelector(".poppup-overlay")
var poppupbox = document.querySelector(".poppup-box")
var inputcancel = document.getElementById("input-cancel")
var inputadd = document.getElementById("input-add")
var container = document.querySelector(".container")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

plusbtn.addEventListener("click", function () {
    poppupoverlay.style.display = "block"
    poppupbox.style.display = "block"
})
inputcancel.addEventListener("click", function (event) {
    event.preventDefault()
    poppupoverlay.style.display = "none"
    poppupbox.style.display = "none"
})
inputadd.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "bookcontainer")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
                     <h3>${bookauthorinput.value}</h3>
                   <p>${bookdescriptioninput.value}</p>
                   <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    event.preventDefault()
    poppupoverlay.style.display = "none"
    poppupbox.style.display = "none"
})
function deletebook(event) {
    event.target.parentElement.remove()
}
