document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const btn = document.getElementById('confirmButton');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'flex';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});