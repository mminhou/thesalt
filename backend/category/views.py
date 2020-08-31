from rest_framework import viewsets

from .models import MainCategory, SubCategory
from .serializers import MainCategorySerializer, SubCategorySerializer

class MainCategoryViewSet(viewsets.ModelViewSet):
    queryset = MainCategory.objects.all()
    serializer_class = MainCategorySerializer

class SubCategoryViewSet(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer




