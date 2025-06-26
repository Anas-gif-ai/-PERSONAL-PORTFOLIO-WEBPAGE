document.getElementById("first").addEventListener("click", () => {
    document.getElementById("Experiencecontent").classList.add("hide");
    document.getElementById("educationcontent").classList.add("hide");
    document.getElementById("skillcontent").classList.toggle("hide");
});

document.getElementById("second").addEventListener("click", () => {
    document.getElementById("skillcontent").classList.add("hide");
    document.getElementById("educationcontent").classList.add("hide");
    document.getElementById("Experiencecontent").classList.toggle("hide");
});

document.getElementById("third").addEventListener("click", () => {
    document.getElementById("skillcontent").classList.add("hide");
    document.getElementById("Experiencecontent").classList.add("hide");
    document.getElementById("educationcontent").classList.toggle("hide");
});