# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-17 07:08
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Page',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('text', models.CharField(max_length=255, verbose_name='Text')),
                ('published', models.BooleanField(default=False, verbose_name='Published')),
                ('stub', models.CharField(max_length=255, verbose_name='URL Stub')),
                ('body', models.TextField(blank=True, verbose_name='Page Body')),
                ('expanded', models.BooleanField(default=True, verbose_name='Expanded')),
                ('leaf', models.BooleanField(default=True, verbose_name='Leaf')),
                ('clientId', models.CharField(blank=True, max_length=255, null=True, verbose_name='ClientId')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='architecturecms.Page')),
            ],
            options={
                'ordering': ('created',),
            },
        ),
    ]
