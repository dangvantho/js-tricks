const init = () => {
    const input = document.getElementById('demo');
    input.addEventListener('keydown', throttle(searchKey, 2000));
}
const searchKey = (count = 1) => {
    const text = document.getElementById('text')
    text.textContent = `Bạn đã gửi request ${count} lần`;
}
const throttle = (fn, delay = 0) => {
    let timer = 0;
    let count = 0;
    return () => {
        const now = new Date().getTime();
        if (now - timer < delay) {
            return
        }
        timer = now;
        count++;
        fn(count);
    }
}
document.addEventListener('DOMContentLoaded', init);