from django.db import models
from django.db import models
from django.core.mail import send_mail
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
# from django.utils.translation import ugettext_lazy as _
# from .managers import UserManager
# Create your models here.


# class User(AbstractBaseUser, PermissionsMixin):#
#     id_admti_usuario = models.AutoField(primary_key=True)
#     usuario = models.CharField(max_length=100, unique=True)
#     password = models.CharField(max_length=150, blank=True, null=True)
#     email = models.EmailField(max_length=150, db_column = 'email', unique=True)
#     email_recuperacion = models.EmailField(max_length=150, db_column = 'email_recuperacion')
#     cadena_sesion = models.CharField(max_length=150, blank=True, null=True)
#     intentos = models.IntegerField(blank=True, null=True)
#     #fecha_acceso_sistema = models.DateTimeField(blank=True, null=True)
#     # last_login = models.DateTimeField(_('last login'), blank=True, null=True, db_column = 'fecha_acceso_sistema')
#     fecha_alta = models.DateTimeField(auto_now_add=True)
#     fecha_modificacion = models.DateTimeField(blank=True, null=True)
    
#     class Meta:
#         managed = True
#         db_table = 'core_user'
class ProyectosCatProyecto(models.Model):
    id_proyecto_proyecto =models.AutoField(primary_key=True)
    nombre_proyecto = models.CharField(max_length=150)
    descripcion = models.CharField(max_length=150)
    ruta = models.CharField(max_length=150, default='')
    dueño = models.CharField(max_length=150)
    img = models.CharField(max_length=150, default='')
    estatus = models.IntegerField()

    def __str__(self) -> str:
        return super().__str__()
    class Meta:
        managed = True
        db_table = 'proyecto_cat_proyecto'

class Moneda(models.Model):
    nombre = models.CharField(max_length=20)
    descripcion = models.TextField()
       
    def __str__(self) -> str:
        return super().__str__()
    
