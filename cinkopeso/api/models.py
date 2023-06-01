from django.db import models

# Create your models here.

class Moneda(models.Model):
    nombre = models.CharField(max_length=20)
    descripcion = models.TextField()
       
    def __str__(self) -> str:
        return super().__str__()