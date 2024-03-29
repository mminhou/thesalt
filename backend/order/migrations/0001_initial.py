# Generated by Django 3.1.6 on 2021-09-11 10:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import order.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.IntegerField(auto_created=True, default=order.models.genKey, primary_key=True, serialize=False)),
                ('dateOrdered', models.DateField(auto_now_add=True)),
                ('status', models.CharField(max_length=50)),
                ('total', models.CharField(max_length=50, null=True)),
                ('firstName', models.CharField(blank=True, max_length=30)),
                ('lastName', models.CharField(blank=True, max_length=30)),
                ('city', models.CharField(blank=True, max_length=30)),
                ('address1', models.CharField(blank=True, max_length=300)),
                ('address2', models.CharField(blank=True, max_length=300)),
                ('zipCode', models.CharField(blank=True, max_length=10)),
                ('contactNum', models.CharField(blank=True, max_length=50)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Order', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='OrderProduct',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('quantity', models.IntegerField(max_length=30)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='OrderProduct', to='order.order')),
                ('products', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='OrderProduct', to='products.product')),
            ],
        ),
    ]
