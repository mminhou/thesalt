from django.db import models
from category.models import MainCategory, SubCategory

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    styleCode = models.CharField(max_length=30)
    mainCategory = models.ForeignKey(MainCategory, related_name="Products", on_delete=models.CASCADE)
    subCategory = models.ForeignKey(SubCategory, related_name="Products", on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    subtitle = models.CharField(max_length=50)
    price = models.CharField(max_length=20)
    color = models.CharField(max_length=20)
    size = models.CharField(max_length=20)
    material = models.CharField(max_length=20)
    detail = models.TextField()
    created = models.DateField(auto_now_add=True)
    mainImage = models.ImageField('MainImage')
    subImage = models.ImageField('SubImage', null=True, blank=True)
    subImage2 = models.ImageField('SubImage2', null=True, blank=True)
    subImage3 = models.ImageField('SubImage2', null=True, blank=True)
    subImage4 = models.ImageField('SubImage2', null=True, blank=True)

    def __str__(self):
        return self.styleCode

