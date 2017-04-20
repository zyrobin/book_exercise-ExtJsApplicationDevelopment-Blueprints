#-*- encoding: utf-8 -*-

from __future__ import absolute_import, unicode_literals

import random
import math
import json
import pytz

from django.shortcuts import get_object_or_404
#from django.utils.timezone import datetime
from datetime import datetime, timedelta

from django.views.generic.base import TemplateView

from braces.views import LoginRequiredMixin, JSONResponseMixin, \
                    JsonRequestResponseMixin

CN_TIMEZONE = pytz.timezone(pytz.country_timezones('cn')[0])

def get_random(base):
    return int(math.floor(random.random() * 15) + base)


class LogStreamAjaxView(JSONResponseMixin, TemplateView):
    json_dumps_kwargs = {"indent": 2}
    def get(self, request, *args, **kwargs):
        json_dict = {
            'type': 'web',
            'subType': 'request',
            'message': 'error',
            #"time":"2014-11-04T12:10:14.466+08:00", compatible with Ext model field
            #   { name: time, type: 'date' }, 
            # This format is An ISO date string as implemented by the native Date object's
            # Date.toISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
            'time': datetime.now(CN_TIMEZONE).isoformat(),
            'value': get_random(5),
        }

        #<QueryDict: {u'filter': [u'[{"property":"type","value":"web"}]'], u'start': [u'0'], u'_dc': [u'1492570602979'], u'limit': [u'25'], u'page': [u'1']}>
        filters = json.loads(request.GET.get('filter'))

        type_filters = filter(lambda f: f['property']=='type', filters)

        if len(type_filters):
            if type_filters[0]['value'] == 'sql':
                json_dict['type'] = 'sql'
            json_dict['message'] = json_dict['time']

        return self.render_json_response([json_dict])


class LogEntryAjaxView(JSONResponseMixin, TemplateView):

    json_dumps_kwargs = {"indent": 2}

    def get(self, request, *args, **kwargs):
        data = []

        #<QueryDict: {u'filter': [u'[{"property":"type","value":"web"}]'], u'start': [u'0'], u'_dc': [u'1492570602979'], u'limit': [u'25'], u'page': [u'1']}>
        filters = json.loads(request.GET.get('filter'))

        type_filters = filter(lambda f: f['property']=='type', filters)

        if len(type_filters):
            end = now = datetime.now(CN_TIMEZONE)
            start = now - timedelta(days=30)

            date = start
            while date <= end:
                data.append({
                    'type': type_filters[0]['value'], # web or sql
                    'subType': 'request',
                    'message': '',
                    #"time":"2014-11-04T12:10:14.466+08:00", compatible with Ext model field
                    #   { name: time, type: 'date' }, 
                    # This format is An ISO date string as implemented by the native Date object's
                    # Date.toISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
                    'time': date.isoformat(),
                    'value': get_random(5),
                })

                date += timedelta(days=1)

        return self.render_json_response(data)

class StatisticAjaxView(JSONResponseMixin, TemplateView):

    json_dumps_kwargs = {"indent": 2}

    def get_percentage_parts(self, numParts):
        parts = []
        for i in range(numParts):
            parts.append(get_random(50))

        return parts

    def get_part(self, parts, record, index):
        total = sum(parts)
        record['percentage'] = round(parts[index]*1.0/total * 100, 2)


    def get(self, request, *args, **kwargs):
        data = []

        #<QueryDict: {u'filter': [u'[{"property":"type","value":"web"}]'], u'start': [u'0'], u'_dc': [u'1492570602979'], u'limit': [u'25'], u'page': [u'1']}>
        filters = json.loads(request.GET.get('filter'))

        category_filters = filter(lambda f: f['property']=='category', filters)

        if len(category_filters):
            category = category_filters[0]['value']

            if category == 'device':
                data.append({ 'category': 'device', 'label': 'Desktop'})
                data.append({ 'category': 'device', 'label': 'Mobile'})
                data.append({ 'category': 'device', 'label': 'Tablet'})
            elif category == 'location':
                data.append({ 'category': 'location', 'label': 'Other'})
                data.append({ 'category': 'location', 'label': 'UK'})
                data.append({ 'category': 'location', 'label': 'USA'})
                data.append({ 'category': 'location', 'label': 'Mexico'})
                data.append({ 'category': 'location', 'label': 'France'})
            else:
                data.append({ 'category': 'browser', 'label': 'Chrome'})
                data.append({ 'category': 'browser', 'label': 'IE'})

            count = len(data)
            total_parts = self.get_percentage_parts(count)
            for index, d in enumerate(data):
                print 'index', index
                print 'd', d
                self.get_part(total_parts, d, index)


        return self.render_json_response(data)
