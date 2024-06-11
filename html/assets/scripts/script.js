
document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const post = this.parentElement; // Get the parent element of the button, which is the blog post container
            post.classList.toggle('expanded');

            if (post.classList.contains('expanded')) {
                this.textContent = 'Read less';
            } else {
                this.textContent = 'Read more';
            }
        });
    });
});