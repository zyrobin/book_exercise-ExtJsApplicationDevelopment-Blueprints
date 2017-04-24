import json

from rest_framework import permissions
from rest_framework import renderers
from rest_framework.response import Response
from rest_framework.reverse import reverse

from rest_framework import viewsets

from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from .models import *
from .serializers import *
from .paginations import ExtJsStartLimitPagination
from rest_framework.pagination import LimitOffsetPagination

class TagViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`, `update` and `destroy` actions.
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class ContactViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`, `update` and `destroy` actions.
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

def _get_filter(filters, filter_name):
    #filters: 
    #   [u'[{"property":"tag","value":"Inbox"},{"property":"searchTerm","value":"%%"}]']
    filter_items = filter(lambda f: f['property'] == filter_name, filters)

    if len(filter_items):
        return filter_items[0]['value']

    return ''

class ThreadViewSet(viewsets.ModelViewSet):
    serializer_class = ThreadSerializer
    pagination_class = ExtJsStartLimitPagination


    def get_serializer(self, *args, **kwargs):
        """
        Return the serializer instance that should be used for validating and
        deserializing input, and for serializing output.
        """
        kwargs['partial'] = True  # enable partial update

        return super(ThreadViewSet, self).get_serializer(*args, **kwargs)

    def get_queryset(self):
        # self.request.GET:
        #<QueryDict: {u'filter': [u'[{"property":"tag","value":"Inbox"},{"property":"searchTerm","value":""}]'], u'start': [u'0'], u'_dc': [u'1492745651262'], u'limit': [u'25'], u'page': [u'1']}>

        #<QueryDict: {u'filter': [u'[{"property":"type","value":"web"}]'], u'start': [u'0'], u'_dc': [u'1492570602979'], u'limit': [u'25'], u'page': [u'1']}>
        queryset = Thread.objects.all()

        if self.request.GET.get('filter'):
            filters = json.loads(self.request.GET.get('filter'))

            tag = _get_filter(filters, 'tag')
            searchTerm = _get_filter(filters, 'searchTerm')

            if tag:
                queryset = queryset.filter(tag__name=tag)

            if searchTerm:
                queryset = queryset.filter(subject__icontains=searchTerm)

        return queryset


    def perform_create(self, serializer):
        tag_name = self.request.POST.get('tag')
        tag = get_object_or_404(Tag, name=tag_name)
        serializer.save(tag=tag)

    def perform_update(self, serializer):
        tag_name = self.request.data.get('tag')
        tag = get_object_or_404(Tag, name=tag_name)
        serializer.save(tag=tag)


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    pagination_class = ExtJsStartLimitPagination

    def get_queryset(self):
        # self.request.GET:
        #<QueryDict: {u'filter': [u'[{"property":"tag","value":"Inbox"},{"property":"searchTerm","value":""}]'], u'start': [u'0'], u'_dc': [u'1492745651262'], u'limit': [u'25'], u'page': [u'1']}>

        #<QueryDict: {u'filter': [u'[{"property":"type","value":"web"}]'], u'start': [u'0'], u'_dc': [u'1492570602979'], u'limit': [u'25'], u'page': [u'1']}>
        queryset = Message.objects.all()

        if self.request.GET.get('thread'):
            queryset = queryset.filter(thread=self.request.GET.get('thread'))

        return queryset
