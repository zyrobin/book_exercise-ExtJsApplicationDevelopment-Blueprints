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

class QuestionnaireViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`, `update` and `destroy` actions.
    """
    queryset = Questionnaire.objects.all()
    serializer_class = QuestionnaireSerializer

class StepViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`, `update` and `destroy` actions.
    """
    queryset = Step.objects.all()
    serializer_class = StepSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`, `update` and `destroy` actions.
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
