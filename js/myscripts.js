let acc = document.getElementsByClassName("accordion__question");
let panel = document.getElementsByClassName("accordion__answer");
let arrow = document.getElementsByClassName("accordion__question::after");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        // if (panel.style.display === "block") {
        //     panel.style.display = "none";
        // } else {
        //     panel.style.display = "block";
        // }
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        if (panel.style.margin) {
            panel.style.margin = null;
        } else {
            panel.style.margin = "0 0 1rem";
        }
    });
}