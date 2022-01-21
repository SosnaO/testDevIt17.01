const indicatorPx = document.querySelector('.indicatorPx');
const indicatorProc = document.querySelector('.indicatorProc');
const progress = document.querySelector('.progress');
console.log(progress);

indicatorPx.addEventListener('input', onInputSizePx);
function onInputSizePx(event) {
  progress.style.width = `${event.currentTarget.value}px`;
}
indicatorProc.addEventListener('input', onInputSizeProc);
function onInputSizeProc(event) {
  progress.style.width = `${event.currentTarget.value}%`;
}
