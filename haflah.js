window.onload = function() {
    // Request fullscreen mode
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
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
