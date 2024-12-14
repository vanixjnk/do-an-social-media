const skeleton = document.querySelectorAll(".skeleton");

setTimeout(() => {
    skeleton.forEach((s) => {
        s.classList.remove("skeleton");
    });
}, 2000)