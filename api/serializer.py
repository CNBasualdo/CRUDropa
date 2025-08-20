from rest_framework import serializers
from .models import Producto


class ProductoSerializer(serializers.ModelSerializer):
    
    Precio =serializers.FloatField()    

    class Meta:
        model= Producto
        fields = '__all__'