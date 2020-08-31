# Generated by Django 3.1 on 2020-08-12 07:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MainCategory',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='SubCategory',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20, unique=True)),
                ('mainCategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SubCategory', to='category.maincategory')),
            ],
        ),
    ]