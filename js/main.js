document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done')
        }
    }, 1500);
}


document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.navbar').classList.toggle("menu");
})


const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const close = document.getElementsByClassName("close")[0];
const btn1 = document.getElementById('myBtn1');

btn.onclick = function () {
    modal.classList.add('open');
}
btn1.onclick = function () {
    modal.classList.add('open')
}
close.onclick = function () {
    modal.classList.remove('open');

}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove('open');
    }
}