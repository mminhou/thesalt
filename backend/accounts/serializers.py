from rest_framework import serializers
from .models import User
# from mall.order.order_serializers import OrderSerializer

# Login pack
# from django.contrib.auth.models import update_last_login
# from django.contrib.auth import authenticate
# from rest_framework_jwt.settings import api_settings
#
# JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
# JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER

class UserSerializer(serializers.ModelSerializer):
    # Order = OrderSerializer(read_only=True, many=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'password',
                  'first_name', 'last_name', 'city', 'address1', 'address2',
                  'zip_code', 'contact_num', 'date_joined')


# class UserLoginSerializer(serializers.Serializer):
#     email = serializers.CharField(max_length=64)
#     password = serializers.CharField(max_length=128, write_only=True)
#     token = serializers.CharField(max_length=255, read_only=True)
#
#     def validate(self, data):
#         email = data.get("email", None)
#         password = data.get("password", None)
#         user = authenticate(email=email, password=password)
#
#         if user is None:
#             return {
#                 'email': 'None'
#             }
#         try:
#             payload = JWT_PAYLOAD_HANDLER(user)
#             jwt_token = JWT_ENCODE_HANDLER(payload)
#             update_last_login(None, user)
#         except User.DoesNotExist:
#             raise serializers.ValidationError(
#                 'User with given email and password does not exists'
#             )
#         return {
#             'email': user.email,
#             'token': jwt_token
#         }