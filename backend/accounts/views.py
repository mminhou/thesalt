from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.filters import SearchFilter
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
        return user

    def update(self, request, *args, **kwargs):
        user = User.objects.get(pk=self.request.META['HTTP_AUTHORIZATION'])
        serializer.save(user=user)
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



#
# class UserViewSetByEmail(viewsets.ModelViewSet):
#     serializer_class = UserSerializer
#
#     def get(self, request):
#         print(request.GET['email'])

    # def get_queryset(self):
    #     queryset = User.objects.all()
    #     email = self.request.query_params.get(email, None)
    #     if email:
    #         queryset = queryset.filter(email=email)
    #     return queryset.id

# @api_view(['POST'])
# @permission_classes([AllowAny])
# def login(request):
#     if request.method == 'POST':
#         serializer = UserLoginSerializer(data=request.data)
#
#         if not serializer.is_valid(raise_exception=True):
#             return Response({"message": "Request Body Error."}, status=status.HTTP_409_CONFLICT)
#         if serializer.validated_data['email'] == "None":
#             return Response({'message': 'fail'}, status=status.HTTP_200_OK)
#
#         response = {
#             'success': 'True',
#             'user': UserSerializer(user, context={'request': request}, ).data,
#             'token': serializer.data['token']
#         }
#         return Response(response, status=status.HTTP_200_OK)
