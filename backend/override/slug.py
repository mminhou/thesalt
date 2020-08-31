from rest_framework.serializers import SlugRelatedField

class SlugRelatedModuleField(SlugRelatedField):
    def get_queryset(self):
        queryset = self.queryset
        if hasattr(self.root, 'app_id'):
            queryset = queryset.filter(module__app_id=self.root.app_id)
        return queryset

