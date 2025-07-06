document.addEventListener("DOMContentLoaded", function () {
    function animateCounter(element, start, end, duration) {
        let range = end - start;
        let current = start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        let timer = setInterval(function () {
            current += increment;
            element.textContent = current + "+";
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    animateCounter(document.querySelector(".counter h3"), 0, 378, 2000);
    animateCounter(document.querySelector(".counter-2 h3"), 0, 30, 2000);
    animateCounter(document.querySelector(".counter-3 h3"), 0, 2263, 2000);
});
