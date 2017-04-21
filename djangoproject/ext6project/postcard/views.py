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
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer

    def list(self, request):
        # request.GET:
        #<QueryDict: {u'filter': [u'[{"property":"tag","value":"Inbox"},{"property":"searchTerm","value":""}]'], u'start': [u'0'], u'_dc': [u'1492745651262'], u'limit': [u'25'], u'page': [u'1']}>

        #<QueryDict: {u'filter': [u'[{"property":"type","value":"web"}]'], u'start': [u'0'], u'_dc': [u'1492570602979'], u'limit': [u'25'], u'page': [u'1']}>
        queryset = self.get_queryset()

        if request.GET.get('filter'):
            filters = json.loads(request.GET.get('filter'))

            tag = _get_filter(filters, 'tag')
            searchTerm = _get_filter(filters, 'searchTerm')

            if tag:
                queryset = queryset.filter(tag__name=tag)

            if searchTerm:
                queryset = queryset.filter(subject__icontains=searchTerm)

        serializer = ThreadSerializer(queryset, many=True)

        return Response(serializer.data)

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def list(self, request):
        # request.GET:
        #<QueryDict: {u'filter': [u'[{"property":"tag","value":"Inbox"},{"property":"searchTerm","value":""}]'], u'start': [u'0'], u'_dc': [u'1492745651262'], u'limit': [u'25'], u'page': [u'1']}>

        #<QueryDict: {u'filter': [u'[{"property":"type","value":"web"}]'], u'start': [u'0'], u'_dc': [u'1492570602979'], u'limit': [u'25'], u'page': [u'1']}>
        queryset = self.get_queryset()

        if request.GET.get('parent'):
            queryset = queryset.filter(parent=request.GET.get('parent'))

        serializer = MessageSerializer(queryset, many=True)

        return Response(serializer.data)
