from rest_framework import serializers
from .models import Product
from category.models import MainCategory, SubCategory
from order.models import OrderProduct
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
    subImage = serializers.ImageField(required=False)
    subImage2 = serializers.ImageField(required=False)
    subImage3 = serializers.ImageField(required=False)
    subImage4 = serializers.ImageField(required=False)

    class Meta:
        model = Product
        fields = ('id', 'styleCode', 'mainCategory', 'subCategory',
                  'title', 'subtitle', 'price', 'color', 'size', 'material', 'detail', 'created',
                  'mainImage', 'subImage', 'subImage2', 'subImage3', 'subImage4'
                  )
