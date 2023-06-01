from django.contrib import admin
from .models import Moneda
# Register your models here.


@admin.register(Moneda)
class MonedaAdmin(admin.ModelAdmin):
    list_filter=('nombre','descripcion')
    list_display=('nombre','descripcion')
# admin.site.register(Moneda)

