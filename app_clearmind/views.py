from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from .models import Fixadas
import time
from datetime import datetime
# Create your views here.

def ViewIndex(request):
    user = request.user
    tarefas = Fixadas.objects.filter(user=user).order_by('-status')

    return render(request, 'index.html', {'tarefas':tarefas})

def ViewSignUp(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        password2 = request.POST['password2']

        if password == password2:
            if User.objects.filter(username=username).exists():
                return redirect('signup')
            else:
                user = User.objects.create_user(username=username, password=password)
                user.save()
                return redirect('signin')
        else:
            
            return redirect('signup')
    else:
        return render(request, 'signup.html')

def ViewSignin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Usuário Não Authenticado')
            return redirect('signup')
    else:

        return render(request, 'signin.html')

def ViewDeletarFixada(request, id):
    user = request.user 

    tarefa = Fixadas.objects.get(user=user, id=id)
    tarefa.delete()

    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

def ViewCheckarFixada(request, id):
    user = request.user
    tarefa = Fixadas.objects.get(user=user, id=id)
    tarefa.status = not tarefa.status

    time.sleep(1.8)
    tarefa.save()
    
    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

def ViewAdicionarFixada(request, titulo, descricao):
    user = request.user 
    tarefa = Fixadas.objects.create(user=user, titulo=titulo, descricao=descricao, data=(datetime.today().strftime("%A, %B %d, %Y %H:%M:%S")))
    tarefa.save()

    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)

def ViewEditarFixada(request, titulo, id):
    user = request.user
    tarefa = Fixadas.objects.get(user=user, id=id)

    tarefa.titulo = titulo
    tarefa.save()
    
    url_anterior = request.META.get('HTTP_REFERER')
    return redirect(url_anterior)