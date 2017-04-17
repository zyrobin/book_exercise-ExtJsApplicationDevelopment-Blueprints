from rest_framework import permissions
from rest_framework import renderers
from rest_framework.response import Response
from rest_framework.reverse import reverse

from rest_framework import viewsets

from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from .models import Page
from .serializers import PageSerializer

class PageViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Page.objects.all()
    serializer_class = PageSerializer

    def retrieve(self, request, pk=None):
        queryset = self.get_queryset()

        if pk=='root':
            page = get_object_or_404(queryset, parent=None)
        else:
            page = get_object_or_404(queryset, pk=pk)

        serializer = PageSerializer(page)
        return Response(serializer.data)
