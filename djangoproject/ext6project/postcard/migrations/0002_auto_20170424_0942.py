# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-24 01:42
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('postcard', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='parent',
            new_name='thread',
        ),
    ]