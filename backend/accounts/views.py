from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.filters import SearchFilter
from django.contrib.auth.hashers import make_password
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.decorators import api_view, permission_classes


@permission_classes([IsAuthenticated])
class UserViewSet(viewsets.ModelViewSet):
    authentication_classes = [JSONWebTokenAuthentication]

    queryset = User.objects.all()
    serializer_class = UserSerializer

    # Encrypted password
    def perform_create(self, serializer):
        hashed_password = make_password(serializer.validated_data['password'])  # get the hashed password
        serializer.validated_data['password'] = hashed_password
        user = super(UserViewSet, self).perform_create(serializer)  # create user
        return user

    def update(self, request, *args, **kwargs):
        # user = User.objects.get(pk=self.request.META['HTTP_AUTHORIZATION'])
        # user = User.objects.get(pk=self.request.data['id'])
        # serializer.save(user=user)
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

    def get_queryset(self):
        queryset = User.objects.all()
        email = self.request.query_params.get('email', None)
        if email is not None:
            queryset = queryset.filter(email=email)
        return queryset

