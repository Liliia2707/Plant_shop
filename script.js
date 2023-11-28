document.addEventListener('DOMContentLoaded', function() {
    const plantCare = document.querySelector('.has-submenu');
    plantCare.addEventListener('click', function(e) {
        const submenu = this.querySelector('.submenu');
        submenu.classList.toggle('active');
        e.preventDefault();
    });
});

// const submenu = document.querySelector('.submenu');
// const scrollbar = document.createElement('div');
// scrollbar.className = 'scrollbar';

// const scrollbarThumb = document.createElement('div');
// scrollbarThumb.className = 'scrollbar-thumb';
// scrollbar.appendChild(scrollbarThumb);
// submenu.appendChild(scrollbar);

// submenu.addEventListener('scroll', function() {
//     const scrollPercentage = (submenu.scrollTop / (submenu.scrollHeight - submenu.clientHeight)) * 100;
//     const thumbHeight = `${scrollPercentage}%`;
//     scrollbarThumb.style.height = thumbHeight;
// })
