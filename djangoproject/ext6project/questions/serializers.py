from rest_framework import serializers
from .models import *

class QuestionSerializer(serializers.ModelSerializer):
    type = serializers.CharField(source='typeName', read_only=True)
    class Meta:
        model = Question
        fields = ('id', 'name', 'required', 'questionText', 'answer', 'step',
                'typeName', 'type')

class StepSerializer(serializers.ModelSerializer):

    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Step
        fields = ('id', 'title', 'introduction', 'questionnaire', 'questions')


class QuestionnaireSerializer(serializers.ModelSerializer):
    steps = StepSerializer(many=True, read_only=True)

    class Meta:
        model = Questionnaire
        fields = ('id', 'title', 'introduction', 'conclusion', 'steps')

