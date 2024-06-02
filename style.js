const btn_open = document.getElementById('btn-open');
const btn_close = document.getElementById('btn-close');
const modal_container = document.getElementById('modal-container');
const modal_demo = document.getElementById('modal-demo');

btn_open.addEventListener('click', () => {
    modal_container.classList.add('show');
});
btn_close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});
modal_container.addEventListener('click', (e) => {
    if (!modal_demo.contains(e.target)) {
        btn_close.click();
    }
})