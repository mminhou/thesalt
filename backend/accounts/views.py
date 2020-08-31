from rest_framework import viewsets, status
from rest_framework.response import Response

from django.contrib.auth.hashers import make_password

from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # Encrypted password
    def perform_create(self, serializer):
        hashed_password = make_password(serializer.validated_data['password'])  # get the hashed password
        serializer.validated_data['password'] = hashed_password
        user = super(UserViewSet, self).perform_create(serializer)  # create user


    def update(self, request, *args, **kwargs):
        user = self.request.data
        User.objects.filter(id=user['id']).update(
            first_name=user['first_name'],
            last_name=user['last_name'],
            city=user['city'],
            address1=user['address1'],
            address2=user['address2'],
            zip_code=user['zip_code'],
            contact_num=user['contact_num']
        )
        return Response(status=status.HTTP_201_CREATED)
