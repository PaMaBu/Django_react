from .models import *
from rest_framework import serializers

class MonedaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Moneda
        fields = ['id', 'nombre', 'descripcion']
        
        
class ProyectoCatProyectoerializer(serializers.ModelSerializer):
    class Meta:
        model = ProyectosCatProyecto
        fields = '__all__'
        # exclude = ['ruta']
        