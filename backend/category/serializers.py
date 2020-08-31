from rest_framework import serializers
from category.models import MainCategory, SubCategory
from override.slug import SlugRelatedModuleField
from products.models import Product

class MainCategorySerializer(serializers.ModelSerializer):
    SubCategory = serializers.PrimaryKeyRelatedField(many=True, queryset=SubCategory.objects.all(), required=False)
    Products = serializers.PrimaryKeyRelatedField(many=True, queryset=Product.objects.all(), required=False)

    class Meta:
        model = MainCategory
        fields = ('id', 'name', 'SubCategory', 'Products')

class SubCategorySerializer(serializers.ModelSerializer):
    mainCategory = SlugRelatedModuleField(
        queryset=MainCategory.objects.all(),
        slug_field='name',
    )
    Products = serializers.PrimaryKeyRelatedField(many=True, queryset=Product.objects.all(), required=False)

    class Meta:
        model = SubCategory
        fields = ('id', 'name', 'mainCategory', 'Products')
