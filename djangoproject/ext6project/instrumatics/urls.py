# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^logStream/$',
        views.LogStreamAjaxView.as_view(),
        name="log-stream"
    ),
    url(r'^logEntry/$',
        views.LogEntryAjaxView.as_view(),
        name="log-entry"
    ),
    url(r'^statistic/$',
        views.StatisticAjaxView.as_view(),
        name="statistic"
    ),
]
