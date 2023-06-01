
from django.contrib import admin
from django.urls import path
from .views import MonedaViewSet
# from .views import moneda_list





from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import *

#from rest_framework_jwt.views import obtain_jwt_token

router = DefaultRouter()
router.register(r'monedas', MonedaViewSet)


urlpatterns = [
    path('', include(router.urls)), #Ruta a donde se mandan los Serializados para React accounts/*/
    
]