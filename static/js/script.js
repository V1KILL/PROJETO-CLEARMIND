
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
        menu.style.left = '-110px';
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
    menu.style.left = '-110px';
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
    

function DeletarFixada(Permissao, id, tid, lid) {
    
    Swal.fire({
        title: '<p style="color: white; font-family: Arial;">Você tem certeza?</p>',
        html: '<p style="color: grey; font-family: Arial;">Não será possível reverter</p>',
        
        iconColor: '#d33',
        background: '#343541',
        showCancelButton: true,
        confirmButtonColor: '#19C37D',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, Deletar!',
        
        
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: '<p style="color:white; font-family: Arial;">Sucesso!</p>',
            icon: 'success',
            iconColor: '#19C37D',
            background: '#343541',
            confirmButtonColor: '#19C37D',
            confirmButtonText: 'Ok',
            }
          )
          setTimeout(() => {
            if (Permissao == 'Sim') {
              window.location.href = `/deletartarefa/${tid}/${lid}`;
            }
            else {
              window.location.href = `/deletarfixada/${id}`;
            }
        }, 1500);
        }
      })
}

function CheckarFixada(Permissao, id, tid, lid) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Sucesso!'
      })
      if (Permissao == 'Sim') {
        window.location.href = `/checkartarefa/${tid}/${lid}`;
      }
      else {
        window.location.href = "/checkarfixada/" + id;
      }
      
  }

function DescricaoFixada(titulo, data, descricao) {
    Swal.fire({
        title:`<p style="color: white">Detalhes de '${titulo}'</p>`,
        html: `<p style="color: grey">${descricao}</p><p style="color: white">Data: <span style="color: #19C37D">${data}</span></p>`,
        
        iconColor: '#19C37D',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#19C37D',
        customClass: {
            confirmButton: 'custom-confirm-button'
        },
        background: '#343541'
    });
}

function EditarFixada(Permissao, id, lista_id, titulo) {
    Swal.fire({
      title: '<p style="color: white">Editar Título</p>',
      html:
        `<input style="color: white; border: 2px solid white;" id="titulo" class="swal2-input" value="${titulo}" autocomplete="off">`,
        
      showCancelButton: true,
      confirmButtonText: 'Renomear',
      showLoaderOnConfirm: true,
      background: '#343541',
      confirmButtonColor: '#19C37D',
      cancelButtonColor: '#d33',
      preConfirm: () => {
        const titulo = Swal.getPopup().querySelector('#titulo').value;
        
        if (titulo.trim() === '') {
          // Se o novo título for vazio, faça algo
          // Por exemplo, exiba um alerta ou não redirecione
          Swal.showValidationMessage('O novo título não pode ser vazio ou conter apenas espaços em branco');
          return false;
        } else {
          if (Permissao == 'Sim'){
            window.location.href = `/editartarefa/${id}/${lista_id}/${titulo}`;
          }
          else {
            window.location.href = `/editarfixada/${titulo}/${id}`;
          }
          // Se o novo título não for vazio, redirecione para a URL
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
}

function AdicionarLista() {
    Swal.fire({
      title: '<p style="color:white;">Criar Lista</p>',
      html:
        '<input style="color: white; border: 2px solid white;" id="titulo" class="swal2-input" placeholder="Título" autocomplete="off">' +
        '<input style="color: white; border: 2px solid white;"  id="descricao" class="swal2-input" placeholder="Descrição" autocomplete="off">',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      background: '#343541',
      confirmButtonColor: '#19C37D',
              
      preConfirm: () => {
        const titulo = Swal.getPopup().querySelector('#titulo').value;
        const descricao = Swal.getPopup().querySelector('#descricao').value;
        // Aqui você pode fazer algo com os valores, por exemplo, redirecionar para uma URL
        
        if (titulo.trim() === '' || descricao.trim() === '') {
          // Se o novo título for vazio, faça algo
          // Por exemplo, exiba um alerta ou não redirecione
          Swal.showValidationMessage('O novo título não pode ser vazio ou conter apenas espaços em branco');
          return false;
        } else {
          // Se o novo título não for vazio, redirecione para a URL
          window.location.href = `/adicionarlista/${titulo}/${descricao}`;
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
}
function AdicionarFixada(Permissão, id) {
    i = id
    p = Permissão
    Swal.fire({
      title: '<p style="color:white;">Fixar Tarefa</p>',
      html:
        '<input style="color: white; border: 2px solid white;" id="titulo" class="swal2-input" placeholder="Título" autocomplete="off">' +
        '<input style="color: white; border: 2px solid white;"  id="descricao" class="swal2-input" placeholder="Descrição" autocomplete="off">',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      background: '#343541',
      confirmButtonColor: '#19C37D',
              
      preConfirm: () => {
        const titulo = Swal.getPopup().querySelector('#titulo').value;
        const descricao = Swal.getPopup().querySelector('#descricao').value;
        // Aqui você pode fazer algo com os valores, por exemplo, redirecionar para uma URL
        
        if (titulo.trim() === '' || descricao.trim() === '') {
          // Se o novo título for vazio, faça algo
          // Por exemplo, exiba um alerta ou não redirecione
          Swal.showValidationMessage('O novo título não pode ser vazio ou conter apenas espaços em branco');
          return false;
        } else {
          // Se o novo título não for vazio, redirecione para a URL
          if (p == 'Sim'){

            window.location.href = `/adicionartarefa/${titulo}/${descricao}/` + i;
          }

          else {
            window.location.href = `/adicionarfixada/${titulo}/${descricao}`;
          }
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
}
