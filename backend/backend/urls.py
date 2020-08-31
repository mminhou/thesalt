"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

# Media Static File
from django.conf import settings
from django.conf.urls.static import static

# WebToken
from rest_framework_jwt.views import obtain_jwt_token

# Viewsets
from accounts.views import UserViewSet
from category.views import MainCategoryViewSet, SubCategoryViewSet
from products.views import ProductViewSet

router = routers.DefaultRouter()
router.register(r'accounts', UserViewSet)
router.register(r'maincategory', MainCategoryViewSet)
router.register(r'subcategory', SubCategoryViewSet)
router.register(r'product', ProductViewSet)

# Authentication credentials were not provided
# http -a email:password GET http://127.0.0.1:8000/api/

urlpatterns = [
    path('', include(router.urls)),
    # curl -X POST -d "email=...&password=..." http://localhost:8000/api-token-auth/
    path('api-token-auth/', obtain_jwt_token),
    path('admin/', admin.site.urls),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
