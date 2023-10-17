
function AtivarMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = 'flex';
    setTimeout(function() {
        menu.style.left = '150px';
    }, 0);
}

function DesativarMenu() {
    var menu = document.getElementById('menu');
    menu.style.left = '0px';
    setTimeout(function() {
        menu.style.display = 'none';
    }, 300);

}

function MudarTema() {
    var moded = document.getElementById('tema')
    var body = document.body
    
    if (moded.innerText == 'light_mode') {
        body.classList.toggle('darkmode')
        moded.innerText = 'dark_mode'
    }

    else {

        if (moded.innerText == 'dark_mode') {
            body.classList.toggle('darkmode')
            moded.innerText = 'light_mode'
        }
   }
}

