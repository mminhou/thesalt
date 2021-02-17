from django.db import models
from accounts.models import User

class Posts(models.Model):
    user = models.ForeignKey(User, related_name="Posts", on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    created = models.DateTimeField('date created', auto_now_add=True)
    content = TextField(default='')
    file = models.FileField(blank=True, null=False)

    def __str__(self):
        return self.title


# class Comment(models.Model):
#     comment = models.CharField(max_length=300)
#     post = models.ForeignKey(Posts, related_name='Comments', on_delete=models.CASCADE, null=True)
#     user = models.ForeignKey(User, related_name='Comments', on_delete=models.CASCADE)

