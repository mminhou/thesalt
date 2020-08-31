from django.db import models
from category.models import MainCategory, SubCategory

class Product(models.Model):
    style_code = models.CharField(max_length=30, primary_key=True)
    mainCategory = models.ForeignKey(MainCategory, related_name="Products", on_delete=models.CASCADE)
    subCategory = models.ForeignKey(SubCategory, related_name="Products", on_delete=models.CASCADE)
    material = models.CharField(max_length=30)
    product_price = models.CharField(max_length=30)
    product_detail = models.TextField()
    product_created = models.DateField(auto_now_add=True)
    product_mainImage = models.ImageField('MainImage')
    product_subImage = models.ImageField('SubImage', null=True, blank=True)
    product_subImage2 = models.ImageField('SubImage2', null=True, blank=True)

    def __str__(self):
        return self.style_code

