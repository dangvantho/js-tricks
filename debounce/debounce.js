const init = () => {
    const btn = document.getElementById('demo');
    btn.addEventListener('click', debounce(sendRequest, 2000));
}
const sendRequest = (time = 1) => {
    const text = document.getElementById('text')
    text.innerText = `Bạn đã gửi request ${time} lần`;
}
const debounce = (fn, delay = 0) => {
    let timerId = null;
    let count = 0;
    return () => {
        if (timerId) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
            count++;
            fn(count)
        }, delay);
    }
}
document.addEventListener("DOMContentLoaded", init)