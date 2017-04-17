#-*- encoding: utf-8 -*-

from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible

from django.db import models

# Create your models here.
@python_2_unicode_compatible
class Page(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    text = models.CharField("Text", max_length=255, blank=True, null=True)
    published = models.BooleanField("Published", default=False)
    stub = models.CharField("URL Stub", max_length=255, blank=True, null=True)
    body = models.TextField("Page Body", blank=True)
    expanded = models.BooleanField("Expanded", default=True)
    leaf = models.BooleanField("Leaf", default=True)
    parent = models.ForeignKey('self', blank=True, null=True,
            related_name='children')

    clientId = models.CharField("ClientId", max_length=255, blank=True,
            null=True)

    class Meta:
        ordering = ('created', )

    def __str__(self):
        return self.text
