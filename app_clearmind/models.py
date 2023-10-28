from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class Fixadas(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=20)
    descricao = models.TextField()
    status = models.BooleanField(default=False)
    data = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo