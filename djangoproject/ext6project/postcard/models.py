#-*- encoding: utf-8 -*-

from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible

from django.db import models

@python_2_unicode_compatible
class Contact(models.Model):
    email = models.EmailField()

    def __str__(self):
        return self.email

@python_2_unicode_compatible
class Tag(models.Model):
    name = models.CharField("Name", max_length=255, blank=False, null=False)

    def __str__(self):
        return self.name

@python_2_unicode_compatible
class Thread(models.Model):
    people = models.CharField("People", max_length=255, blank=False, null=False)
    subject = models.CharField("Subject", max_length=255, blank=False, null=False)
    tag = models.ForeignKey(Tag)

    @property
    def lastMessageOn(self):
        m = self.messages.all().first()
        if m:
            return m.date
        return None

    @property
    def lastMessageSnippet(self):
        m = self.messages.all().first()
        if m:
            return m.body[:20]
        return ''

    def __str__(self):
        return self.subject


@python_2_unicode_compatible
class Message(models.Model):
    people = models.CharField("People", max_length=255, blank=False, null=False)
    subject = models.CharField("Subject", max_length=255, blank=False, null=False)
    body = models.TextField("Body", blank=True)
    date = models.DateTimeField(auto_now_add=True)

    parent = models.ForeignKey(Thread, related_name='messages')

    class Meta:
        ordering = ('-date', )

    def __str__(self):
        return self.subject
