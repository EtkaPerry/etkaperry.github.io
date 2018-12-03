// Kutucuk için
function kutu() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
};

// Aç kapat dil için
function ackapa() {
    var x = document.getElementById("dilsecici");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Dil dışı oyun bitti
$(document).mouseup(function(e) 
{
    var container = $("ust");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});