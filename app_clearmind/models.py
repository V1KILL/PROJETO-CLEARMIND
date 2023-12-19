from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()
from datetime import datetime
# Create your models here.

class Fixadas(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=250)
    descricao = models.TextField()
    status = models.BooleanField(default=False)
    data = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.titulo

class Listas(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=30)
    descricao = models.TextField()
    data = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.titulo

class Tarefas(models.Model):
    lista = models.ForeignKey(Listas, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=30)
    descricao = models.TextField()
    status = models.BooleanField(default=False)
    data = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.titulo