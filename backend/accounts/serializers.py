from rest_framework import serializers
from .models import User
from order.serializers import OrderSerializer

class UserSerializer(serializers.ModelSerializer):
    Order = OrderSerializer(read_only=True, many=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'password',
                  'first_name', 'last_name', 'city', 'address1', 'address2',
                  'zip_code', 'contact_num', 'date_joined', 'Order')