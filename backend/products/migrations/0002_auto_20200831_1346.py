# Generated by Django 3.1 on 2020-08-31 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='material',
            field=models.CharField(max_length=30),
        ),
    ]
