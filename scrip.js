let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");

sidebarBtn.onclick = function() {
    sidebar.classList.toggle("acctive");
}

let nav = document.querySelector("nav");
let searchbox = document.querySelector(".search-box .bx-search");

searchbox.addEventListener("click", () =>{
    nav.classList.toggle("showInput");
    if(nav.classList.contains("showInput")){
        searchbox.classList.replace("bx-search", "bx-x")
    }else{

        searchbox.classList.replace("bx-x", "bx-search")

    }
})