from rest_framework import serializers
from .models import User
from order.serializers import OrderSerializer
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    Order = OrderSerializer(read_only=True, many=True)
    class Meta:
        model = User
        fields = ('id', 'email', 'password',
                  'first_name', 'last_name', 'city', 'address1', 'address2',
                  'zip_code', 'contact_num', 'date_joined', 'Order')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    # def create(self, validated_data):
    #     # password = validated_data.pop('password')
    #     password = make_password(validated_data.pop('password'))
    #     print(password)
    #     user = User(**validated_data)
    #     user.set_password(password)
    #     user.save()
    #     return user