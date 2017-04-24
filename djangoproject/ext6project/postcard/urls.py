from django.conf.urls import url, include

from rest_framework.routers import DefaultRouter

from . import views

# Create a router and register our viewsets with it.
router = DefaultRouter()

router.register(r'tags', views.TagViewSet)
router.register(r'contacts', views.ContactViewSet)

# the viewset doesn't have `queryset` attr, 
# so we must set base_name
router.register(r'threads', views.ThreadViewSet, base_name='thread')
router.register(r'messages', views.MessageViewSet, base_name='message')

urlpatterns = [
    url(r'^', include(router.urls)),
]
