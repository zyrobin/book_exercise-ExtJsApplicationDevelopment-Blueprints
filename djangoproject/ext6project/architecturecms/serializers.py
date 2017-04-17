from rest_framework import serializers
from .models import Page

class RecursiveSerializer(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


class PageSerializer(serializers.ModelSerializer):
    children = RecursiveSerializer(many=True, read_only=True)

    class Meta:
        model = Page
        fields = ('id', 'text', 'published',
                'stub', 'body', 'expanded', 'leaf', 'clientId', 'parent', 'children')
