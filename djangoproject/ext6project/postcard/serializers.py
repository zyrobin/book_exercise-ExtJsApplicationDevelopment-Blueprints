from rest_framework import serializers
from .models import *


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'email',)

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name',)


class RecursiveSerializer(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


class ThreadSerializer(serializers.ModelSerializer):
    tag = serializers.CharField(source="tag.name")
    class Meta:
        model = Thread
        fields = ('id', 'people', 'subject', 'tag',
                'lastMessageOn', 'lastMessageSnippet', )

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'people', 'subject', 'body', 'date', 'parent')
