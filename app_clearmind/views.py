from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Fixadas, Listas, Tarefas
import time
from datetime import datetime
# Create your views here.
@login_required(login_url='/signin')
def ViewIndex(request):
    user = request.user
    tarefas = Fixadas.objects.filter(user=user).order_by('-status')
    listas = Listas.objects.filter(user=user).order_by('-data')

    return render(request, 'index.html', {'tarefas':tarefas, 'listas':listas})

def ViewSignUp(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        password2 = request.POST['password2']

        if password == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'Nome Existente')
                return redirect('signup')
            else:
                user = User.objects.create_user(username=username, password=password)
                user.save()
                messages.info(request, 'Conta Criada com Sucesso')
                return redirect('signin')
        else:
            messages.info(request, 'Senhas não coincidem')
            return redirect('signup')
    else:
        return render(request, 'signup.html')


def ViewSignin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = User.objects.filter(username=username).first()

        if user is not None and user.check_password(password):
            auth.login(request, user)
            return redirect('/')
        elif user is not None and not user.check_password(password):
            messages.info(request, 'Senha incorreta')
            return redirect('signin')
        else:
            messages.info(request, 'Usuário Não existe')
            return redirect('signin')
    else:
        return render(request, 'signin.html')
    
@login_required(login_url='/signin')
def ViewLogout(request):
    logout(request)
    return redirect('signin')   

@login_required(login_url='/signin')
def ViewDeletarFixada(request, id):
    user = request.user
    tarefa = Fixadas.objects.get(user=user, id=id)
    tarefa.delete()

    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

@login_required(login_url='/signin')
def ViewCheckarFixada(request, id):
    user = request.user
    tarefa = Fixadas.objects.get(user=user, id=id)
    tarefa.status = not tarefa.status
    time.sleep(1.8)
    tarefa.save()
    
    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

@login_required(login_url='/signin')
def ViewAdicionarFixada(request, titulo, descricao):
    user = request.user 
    tarefa = Fixadas.objects.create(user=user, titulo=titulo, descricao=descricao, data=(datetime.today().strftime("%A, %B %d, %Y %H:%M:%S")))
    tarefa.save()

    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

@login_required(login_url='/signin')
def ViewEditarFixada(request, titulo, id):
    user = request.user
    tarefa = Fixadas.objects.get(user=user, id=id)
    tarefa.titulo = titulo
    tarefa.save()
    
    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

@login_required(login_url='/signin')
def ViewAdicionarLista(request, titulo, descricao):
    user = request.user 
    lista = Listas.objects.create(user=user, titulo=titulo, descricao=descricao, data=(datetime.today().strftime("%A, %B %d, %Y %H:%M:%S")))
    lista.save()

    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

@login_required(login_url='/signin')
def ViewEntrarLista(request, id):
    user = request.user 
    listas = Listas.objects.filter(user=user)
    lista_id = Listas.objects.get(user=user, id=id)
    tarefas = Tarefas.objects.filter(lista=lista_id).order_by('-status')

    return render(request, 'list.html', {'listas':listas,'lista_id':lista_id, 'tarefas':tarefas})

@login_required(login_url='/signin')
def ViewDeletarLista(request, id):
    user = request.user 
    lista = Listas.objects.get(user=user, id=id)
    lista.delete()

    return redirect('/')

@login_required(login_url='/signin')
def ViewEditarLista(request, id, titulo):
    user = request.user
    lista = Listas.objects.get(user=user, id=id)
    lista.titulo = titulo
    lista.save()
    
    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

@login_required(login_url='/signin')
def ViewAdicionarTarefa(request, titulo, descricao, id):
    user = request.user
    lista = Listas.objects.get(user=user, id=id)
    tarefa = Tarefas.objects.create(lista=lista, titulo=titulo, descricao=descricao, data=(datetime.today().strftime("%A, %B %d, %Y %H:%M:%S")))
    tarefa.save()

    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

@login_required(login_url='/signin')
def ViewDeletarTarefa(request, tarefa_id, lista_id):
    user = request.user
    lista = Listas.objects.get(user=user, id=lista_id)
    tarefa = Tarefas.objects.get(lista=lista, id=tarefa_id)
    tarefa.delete()
    
    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

@login_required(login_url='/signin')
def ViewCheckarTarefa(request, tarefa_id, lista_id):
    user = request.user
    lista = Listas.objects.get(user=user, id=lista_id)
    tarefa = Tarefas.objects.get(lista=lista, id=tarefa_id)
    tarefa.status = not tarefa.status
    time.sleep(1.8)
    tarefa.save()
    
    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

@login_required(login_url='/signin')
def ViewEditarTarefa(request, tarefa_id, lista_id, titulo):
    user = request.user
    lista = Listas.objects.get(user=user, id=lista_id)
    tarefa = Tarefas.objects.get(lista=lista, id=tarefa_id)
    tarefa.titulo = titulo
    tarefa.save()
    
    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)



