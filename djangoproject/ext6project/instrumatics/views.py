#-*- encoding: utf-8 -*-

from __future__ import absolute_import, unicode_literals

import random
import math
import json

from django.shortcuts import get_object_or_404
from django.utils.timezone import datetime

from django.views.generic.base import TemplateView

from braces.views import LoginRequiredMixin, JSONResponseMixin, \
                    JsonRequestResponseMixin


def get_random(base):
    return int(math.floor(random.random() * 15) + base)


class LogStreamAjaxView(JSONResponseMixin, TemplateView):
    json_dumps_kwargs = {"indent": 2}
    def get(self, request, *args, **kwargs):
        json_dict = {
            'type': 'web',
            'subType': 'request',
            'message': 'error',
            #"time":"2014-11-04T12:10:14.466Z", compatible with Ext model field
            #   { name: time, type: 'date' }, 
            # This format is An ISO date string as implemented by the native Date object's
            # Date.toISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
            'time': datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
            'value': get_random(5),
        }

        #<QueryDict: {u'filter': [u'[{"property":"type","value":"web"}]'], u'start': [u'0'], u'_dc': [u'1492570602979'], u'limit': [u'25'], u'page': [u'1']}>
        filters = json.loads(request.GET.get('filter'))

        type_filters = filter(lambda f: f['property']=='type', filters)

        if len(type_filters):
            if type_filters[0]['value'] == 'sql':
                json_dict['type'] = 'sql'
            json_dict['message'] = ''

        return self.render_json_response([json_dict])
