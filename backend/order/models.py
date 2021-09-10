from django.db import models
from accounts.models import User
from products.models import Product
import random
from django.utils import timezone

def genKey():
    return random.randrange(100000,500000)

class Order(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True, default=genKey)
    user = models.ForeignKey(User, related_name="Order", on_delete=models.CASCADE)
    dateOrdered = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=50)
    total = models.CharField(max_length=50, null=True)
    firstName = models.CharField(max_length=30, blank=True)
    lastName = models.CharField(max_length=30, blank=True)
    city = models.CharField(max_length=30, blank=True)
    address1 = models.CharField(max_length=300, blank=True)
    address2 = models.CharField(max_length=300, blank=True)
    zipCode = models.CharField(max_length=10, blank=True)
    contactNum = models.CharField(max_length=50, blank=True)

    def save(self, *args, **kwargs):
        super(Order, self).save(*args, **kwargs)

class OrderProduct(models.Model):
    id = models.AutoField(primary_key=True)
    quantity = models.IntegerField(max_length=30)
    products = models.ForeignKey(Product, related_name='OrderProduct', on_delete=models.CASCADE)
    order = models.ForeignKey(Order, related_name='OrderProduct', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        super(OrderProduct, self).save(*args, **kwargs)