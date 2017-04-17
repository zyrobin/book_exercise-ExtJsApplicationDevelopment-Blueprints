from django.conf.urls import url, include

from .views import PageViewSet

page_list = PageViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

page_detail = PageViewSet.as_view({
    'get': 'retrive',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})


urlpatterns = [
    url(r'^pages/root/$', page_list, name="page-list"),
    url(r'^pages/$', page_list, name="page-list"),
    url(r'^pages/(?P<pk>[0-9]+)/$', page_detail, name='page-detail'),
]
