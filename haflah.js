    document.getElementById("fullscreenBtn").onclick = function() {
        // Memeriksa metode fullscreen yang didukung browser
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen(); // Browser modern
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(); // Safari
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen(); // Internet Explorer / Edge
        }
    };

document.querySelectorAll('.nav-indicator .btn').forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetSection = document.querySelector(targetId);
        const activeSection = document.querySelector('.section.active');

        if (targetSection && activeSection !== targetSection) {
            activeSection.classList.remove('active');
            targetSection.classList.add('active');
        }
    });
});
