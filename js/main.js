let isPopupOpen = false;

function openModal() {
    var element = document.getElementById("popup");
   element.classList.add("open");
   console.log("Open");
}

function backLink() {
    var element = document.getElementById("popup");
   element.classList.remove("open");
   console.log("Close");
}