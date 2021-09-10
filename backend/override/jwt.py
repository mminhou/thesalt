from accounts.serializers import UserSerializer

# /api-token-auth -> return token 만 반환됨 이때, user 정보도 반환하기 위해서 함수 정의
def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }

