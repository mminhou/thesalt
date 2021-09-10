from django.db import models
from category.models import MainCategory, SubCategory
import random

def genKey():
    return random.randrange(10000,99999)

class Product(models.Model):
    id = models.IntegerField(primary_key=True, editable=False, auto_created=True, verbose_name='Id', default=genKey)
    styleCode = models.CharField(max_length=30)
    mainCategory = models.ForeignKey(MainCategory, related_name="Products", on_delete=models.CASCADE)
    subCategory = models.ForeignKey(SubCategory, related_name="Products", on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    subtitle = models.CharField(max_length=50)
    price = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=50)
    material = models.CharField(max_length=50)
    detail = models.TextField()
    created = models.DateField(auto_now_add=True)
    mainImage = models.ImageField('MainImage')
    subImage = models.ImageField('SubImage', null=True, blank=True)
    subImage2 = models.ImageField('SubImage2', null=True, blank=True)
    subImage3 = models.ImageField('SubImage2', null=True, blank=True)
    subImage4 = models.ImageField('SubImage2', null=True, blank=True)

    # def __str__(self):
    #     return self.id

    class Meta:
        verbose_name = 'product'
        verbose_name_plural = 'products'

