
var Permissão = 'Sim'

function AtivarMenu() {
    if (Permissão == 'Sim') {
        var menu = document.getElementById('menu');
        menu.style.display = 'flex';
        setTimeout(function() {
            menu.style.left = '210px';
        }, 50);
    }
}

function DesativarMenu() {
    if (Permissão == 'Sim') {
        var menu = document.getElementById('menu');
        menu.style.left = '-10px';
        if (Permissão == 'Não')
            menu.style.display = 'flex';
    }
}

function ManterMenu () {
    Permissão = 'Não'
    var menu = document.getElementById('menu'); 
    menu.style.left = '210px';
    
}

function SairMenu() {
    var menu = document.getElementById('menu'); 
    menu.style.left = '-10px';
    Permissão = 'Sim'
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

