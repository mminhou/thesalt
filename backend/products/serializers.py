from rest_framework import serializers
from .models import Product
from category.models import MainCategory, SubCategory
from override.slug import SlugRelatedModuleField
# from mall.override.pkRelatedField import MyPrimaryKeyRelatedField

class ProductSerializer(serializers.ModelSerializer):
    mainCategory = SlugRelatedModuleField(
        queryset=MainCategory.objects.all(),
        slug_field='name'
    )
    subCategory = SlugRelatedModuleField(
        queryset=SubCategory.objects.all(),
        slug_field='name'
    )
    # Product subImage
    product_subImage = serializers.ImageField(required=False)
    product_subImage2 = serializers.ImageField(required=False)
    class Meta:
        model = Product
        fields = ('mainCategory', 'subCategory',
                  'style_code', 'material', 'product_price', 'product_detail',
                  'product_created', 'product_mainImage', 'product_subImage', 'product_subImage2',
                  )
