# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-25 02:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='answer',
            field=models.TextField(blank=True, verbose_name='Answer Text'),
        ),
    ]
