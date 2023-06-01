from operator import index
# from socket import J1939_PGN_REQUEST
from urllib import request
from django.shortcuts import render, HttpResponse
from .serializers import MonedaSerializer
from .models import Moneda
from django.http import JsonResponse
# from rest_framework.parsers import JSONParser  
from rest_framework import status, generics, viewsets


# Create your views here.



# @csrf_exempt
# def moneda_list(request):
#     # return HttpResponse("funciona")
#     if request.method == 'GET':
#         monedas = Moneda.objects.objects.all()
#         serializer = MonedaSerializer(monedas, many=True)
#         return JsonResponse(serializer.data, safe=False)
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = MonedaSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)
    
    

class MonedaViewSet(viewsets.ModelViewSet):
    queryset = Moneda.objects.all()
    serializer_class = MonedaSerializer
    