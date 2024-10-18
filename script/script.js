var preloader;

function myfunction() {
    preloader = setTimeout(showpage, 3000);
}

function showpage() {
    document.getElementById("loader").style.display = "flex";
}




