#-*- encoding: utf-8 -*-

from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible

from django.db import models

@python_2_unicode_compatible
class Questionnaire(models.Model):
    title = models.CharField("Title", max_length=255, blank=False, null=False)
    introduction = models.TextField("Introduction", blank=False)
    conclusion = models.TextField("Conclusion", blank=False)

    def __str__(self):
        return self.title

@python_2_unicode_compatible
class Step(models.Model):
    title = models.CharField("Title", max_length=255, blank=False, null=False)
    introduction = models.TextField("Introduction", blank=False)
    questionnaire = models.ForeignKey(Questionnaire, related_name='steps')

    def __str__(self):
        return self.title

@python_2_unicode_compatible
class Question(models.Model):
    name = models.CharField("Name", max_length=255, blank=False, null=False)
    required = models.BooleanField("Required")
    questionText = models.TextField("Question Text", blank=False)
    typeName = models.CharField("Type", max_length=20, blank=False, null=False)
    answer = models.TextField("Answer Text", blank=True)
    step = models.ForeignKey(Step, related_name='questions')

    def __str__(self):
        return self.name
