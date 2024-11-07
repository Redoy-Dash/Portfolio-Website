// Menu Toggle

document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.querySelector('.dropdown-toggle-icon');
    const menuContainer = document.querySelector('.menu-container');

    toggleIcon.addEventListener('click', function () {
        menuContainer.classList.toggle('active');
    });
});






// Live Time
const showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h > 11) {
        session = "PM";
    }

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById('Clock').innerHTML = time;
}

setInterval(showTime, 1000);