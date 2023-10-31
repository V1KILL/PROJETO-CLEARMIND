from django.contrib import admin
from django.urls import path
from .views import ViewIndex, ViewSignUp, ViewSignin, ViewDeletarFixada, ViewCheckarFixada, ViewAdicionarFixada, ViewEditarFixada, ViewAdicionarLista

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

]
