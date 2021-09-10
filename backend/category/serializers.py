from rest_framework import serializers
from category.models import MainCategory, SubCategory
from override.slug import SlugRelatedModuleField
from products.models import Product

class MainCategorySerializer(serializers.ModelSerializer):
    Products = serializers.PrimaryKeyRelatedField(many=True, queryset=Product.objects.all(), required=False)

    class Meta:
        model = MainCategory
        fields = ('id', 'name', 'Products')

class SubCategorySerializer(serializers.ModelSerializer):
    Products = serializers.PrimaryKeyRelatedField(many=True, queryset=Product.objects.all(), required=False)

    class Meta:
        model = SubCategory
        fields = ('id', 'name', 'Products')

