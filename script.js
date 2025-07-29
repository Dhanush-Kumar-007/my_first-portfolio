var tabLinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");

function change(tabname, contentname) {
    for (let content of tabcontent) {
        content.classList.remove("active-content");
    }
    for (let tabLink of tabLinks) { 
        tabLink.classList.remove("active-link");
    }
    
    document.getElementById(tabname).classList.add('active-link');
    document.getElementById(contentname).classList.add('active-content');
}
