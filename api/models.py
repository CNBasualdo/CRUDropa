from django.db import models

# Create your models here.
class Producto(models.Model):
    NombreProduc = models.CharField(max_length=100)
    Talle = models.CharField(max_length=4)
    Detalle= models.CharField(max_length=800)
    Stock = models.BooleanField(default=True)
    Precio = models.DecimalField(max_digits=5,decimal_places=2,default=0)
    Cantidad= models.IntegerField(default=0)


    