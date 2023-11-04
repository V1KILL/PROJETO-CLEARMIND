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
  var moded = document.getElementById('tema');
  var body = document.body;
  var isDarkMode = body.classList.contains('darkmode');

  if (isDarkMode) {
      body.classList.remove('darkmode');
      moded.innerText = 'dark_mode';
      localStorage.setItem('dark-mode', 'false');
  } else {
      body.classList.add('darkmode');
      moded.innerText = 'light_mode';
      localStorage.setItem('dark-mode', 'true');
  }
}

const isDarkMode = localStorage.getItem('dark-mode') === 'true';

if (isDarkMode) {
  document.body.classList.add('darkmode');
  document.getElementById('tema').innerText = 'light_mode';
} else {
  document.getElementById('tema').innerText = 'dark_mode';
}
  
function MostrarLista() {
    var lista = document.getElementById('lista')
    var seta = document.getElementById('seta')

    if (seta.innerText == 'expand_more') {
        seta.innerText = 'expand_less'
        lista.style.display = 'flex'
    }

    else {
        if (seta.innerText = 'expand_less') {
            seta.innerText = 'expand_more'
            lista.style.display = 'none'
        }
    }
}

function AdicionarLista() {
    Swal.fire({
      title: '<p style="color:white;">Criar Lista</p>',
      html: `
        <input style="color: white; border: 2px solid white;" id="titulo" class="swal2-input" placeholder="Título" autocomplete="off">
        <input style="color: white; border: 2px solid white;" id="descricao" class="swal2-input" placeholder="Descrição" autocomplete="off">
      `,
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      background: '#343541',
      confirmButtonColor: '#19C37D',
      
      preConfirm: () => {
        const titulo = Swal.getPopup().querySelector('#titulo').value;
        const descricao = Swal.getPopup().querySelector('#descricao').value;
    
        if (titulo.trim() === '' || descricao.trim() === '') {
          Swal.showValidationMessage('O novo título não pode ser vazio ou conter apenas espaços em branco');
          return false;
        } else {
          window.location.href = `/adicionarlista/${titulo}/${descricao}`;
        }
      },
      
      allowOutsideClick: () => !Swal.isLoading()
    });
}

function AdicionarFixada() {
    Swal.fire({
      title: '<p style="color:white;">Fixar Tarefa</p>',
      html: `
        <input style="color: white; border: 2px solid white;" id="titulo" class="swal2-input" placeholder="Título" autocomplete="off">
        <input style="color: white; border: 2px solid white;" id="descricao" class="swal2-input" placeholder="Descrição" autocomplete="off">
      `,
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      background: '#343541',
      confirmButtonColor: '#19C37D',
      
      preConfirm: () => {
        const titulo = Swal.getPopup().querySelector('#titulo').value;
        const descricao = Swal.getPopup().querySelector('#descricao').value;
      
        if (titulo.trim() === '' || descricao.trim() === '') {
          Swal.showValidationMessage('O título e a descrição não podem ser vazios ou conter apenas espaços em branco');
          return false;
        } else {
          window.location.href = `/adicionarfixada/${titulo}/${descricao}`;
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
}

function EditarFixada(id, titulo) {
    Swal.fire({
      title: '<p style="color: white">Editar Título</p>',
      html: `<input style="color: white; border: 2px solid white;" id="titulo" class="swal2-input" value="${titulo}" autocomplete="off">`,
      showCancelButton: true,
      confirmButtonText: 'Renomear',
      showLoaderOnConfirm: true,
      background: '#343541',
      confirmButtonColor: '#19C37D',
      cancelButtonColor: '#d33',
      preConfirm: () => {
        const novoTitulo = Swal.getPopup().querySelector('#titulo').value;
        
        if (novoTitulo.trim() === '') {
          Swal.showValidationMessage('O novo título não pode ser vazio ou conter apenas espaços em branco');
          return false;
        } else {
          window.location.href = `/editarfixada/${novoTitulo}/${id}`;
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
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

function DeletarFixada(id) {
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
          });
          setTimeout(() => {
            window.location.href = `/deletarfixada/${id}`;
          }, 1500);
        }
    });
}

function CheckarFixada(id) {
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
      window.location.href = "/checkarfixada/" + id;
}

function DeletarLista(id) { 
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
        });
        setTimeout(() => {
          window.location.href = '/deletarlista/' + id;
        }, 1500);
      }
    });
}

function DescricaoLista(titulo, data, descricao) {
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

function EditarLista(id, titulo) {
  Swal.fire({
    title: '<p style="color: white">Editar Título</p>',
    html: `<input style="color: white; border: 2px solid white;" id="titulo" class="swal2-input" value="${titulo}" autocomplete="off">`,
    showCancelButton: true,
    confirmButtonText: 'Renomear',
    showLoaderOnConfirm: true,
    background: '#343541',
    confirmButtonColor: '#19C37D',
    cancelButtonColor: '#d33',
    preConfirm: () => {
      const novoTitulo = Swal.getPopup().querySelector('#titulo').value;
      
      if (novoTitulo.trim() === '') {
        Swal.showValidationMessage('O novo título não pode ser vazio ou conter apenas espaços em branco');
        return false;
      } else {
        window.location.href = '/editarlista/' + id + '/' + novoTitulo;
      }
    },
    allowOutsideClick: () => !Swal.isLoading()
  });
}

function AdicionarTarefa(id) {
    Swal.fire({
      title: '<p style="color:white;">Fixar Tarefa</p>',
      html: `
        <input style="color: white; border: 2px solid white;" id="titulo" class="swal2-input" placeholder="Título" autocomplete="off">
        <input style="color: white; border: 2px solid white;"  id="descricao" class="swal2-input" placeholder="Descrição" autocomplete="off">
      `,
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,
      background: '#343541',
      confirmButtonColor: '#19C37D',
      preConfirm: () => {
        const titulo = Swal.getPopup().querySelector('#titulo').value;
        const descricao = Swal.getPopup().querySelector('#descricao').value;
        
        if (titulo.trim() === '' || descricao.trim() === '') {
          Swal.showValidationMessage('O título e a descrição não podem ser vazios ou conter apenas espaços em branco');
          return false;
        } else {
          window.location.href = `/adicionartarefa/${titulo}/${descricao}/${id}`;
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
}

function EditarTarefa(id, lista_id, titulo) {
  Swal.fire({
    title: '<p style="color: white">Editar Título</p>',
    html: `<input style="color: white; border: 2px solid white;" id="titulo" class="swal2-input" value="${titulo}" autocomplete="off">`,
    showCancelButton: true,
    confirmButtonText: 'Renomear',
    showLoaderOnConfirm: true,
    background: '#343541',
    confirmButtonColor: '#19C37D',
    cancelButtonColor: '#d33',
    preConfirm: () => {
      const novoTitulo = Swal.getPopup().querySelector('#titulo').value;
      
      if (novoTitulo.trim() === '') {
        Swal.showValidationMessage('O novo título não pode ser vazio ou conter apenas espaços em branco');
        return false;
      } else {
        window.location.href = `/editartarefa/${id}/${lista_id}/${novoTitulo}`;
      }
    },
    allowOutsideClick: () => !Swal.isLoading()
  });
}

function DescricaoTarefa(titulo, data, descricao) {
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

function DeletarTarefa(tid, lid) {
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
        });
        setTimeout(() => {
          window.location.href = `/deletartarefa/${tid}/${lid}`;
        }, 1500);
      }
    });
}

function CheckarTarefa(tid, lid) {
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
    window.location.href = `/checkartarefa/${tid}/${lid}`;
}



