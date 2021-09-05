from accounts.serializers import UserSerializer

def jwt_response_payload_handler(token, user=None, request=None):
    user = UserSerializer(user, context={'request': request}).data
    return {
        'token': token,
        'userid': user['id'],
        'username':user['username']
    }