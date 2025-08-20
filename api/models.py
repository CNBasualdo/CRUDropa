from django.db import models

# Create your models here.
class Producto(models.Model):
    ImgProd = models.ImageField(null=True, blank=True)
    NombreProduc = models.CharField(max_length=100)
    Talle = models.CharField(max_length=4)
    Detalle= models.CharField(max_length=800)
    Stock = models.PositiveIntegerField(default=0)
    Precio = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    Cantidad= models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.NombreProduc} - ${self.Precio}"