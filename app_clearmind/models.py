from django.db import models

# Create your models here.

class Fixadas(models.Model):
    titulo = models.CharField(max_length=20)
    descricao = models.TextField()
    status = models.BooleanField(default=False)
    data = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo