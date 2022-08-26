var printBtn = document.getElementById('btnPrint');
var containerPrint = document.querySelector('.container');
var btnDownload = document.querySelector('.container-print');

printBtn.addEventListener('click' , () =>  print());

window.addEventListener('beforeprint' ,() => {
    btnDownload.style.display = 'none' ;
})
window.addEventListener('afterprint' , () => {
    btnDownload.style.display = '' ;
})