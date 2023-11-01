from django.contrib import admin
from django.urls import path

from .views import (
    ViewIndex,
    ViewSignUp,
    ViewSignin,
)

from .views import (
    ViewDeletarFixada,
    ViewCheckarFixada,
    ViewAdicionarFixada,
    ViewEditarFixada,
)

from .views import (
    ViewAdicionarLista,
    ViewEntrarLista,
    ViewAdicionarTarefa,
    ViewDeletarTarefa,
    ViewCheckarTarefa,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ViewIndex, name='index'),
    path('signup', ViewSignUp, name='signup'),
    path('signin', ViewSignin, name='signin'),
    path('deletarfixada/<int:id>', ViewDeletarFixada, name='deletar-fixada'),
    path('checkarfixada/<int:id>', ViewCheckarFixada, name='checkar-fixada'),
    path('adicionarfixada/<str:titulo>/<str:descricao>', ViewAdicionarFixada, name='adicionar-fixada'),
    path('editarfixada/<str:titulo>/<int:id>', ViewEditarFixada, name='editar-fixada'),
    path('adicionarlista/<str:titulo>/<str:descricao>', ViewAdicionarLista, name='adicionar-lista'),
    path('entrarlista/<int:id>', ViewEntrarLista, name='entrar-lista'),
    path('adicionartarefa/<str:titulo>/<str:descricao>/<int:id>', ViewAdicionarTarefa, name='adicionar-tarefa'),
    path('deletartarefa/<int:tarefa_id>/<int:lista_id>', ViewDeletarTarefa, name='deletar-tarefa'),
    path('checkartarefa/<int:tarefa_id>/<int:lista_id>', ViewCheckarTarefa, name='checkar-tarefa'),

]
