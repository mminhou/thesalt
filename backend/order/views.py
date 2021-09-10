from rest_framework import viewsets
from .models import Order, OrderProduct
from .serializers import OrderSerializer, OrderProductSerializer
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny


@permission_classes([IsAuthenticated])
class OrderViewSet(viewsets.ModelViewSet):
    authentication_classes = [JSONWebTokenAuthentication]
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderProductViewSet(viewsets.ModelViewSet):
    queryset = OrderProduct.objects.all()
    serializer_class = OrderProductSerializer
