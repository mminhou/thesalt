from django.db import models

class MainCategory(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name

class SubCategory(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20, unique=True)
    mainCategory = models.ForeignKey(MainCategory, related_name="SubCategory", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

