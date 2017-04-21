from django.conf.urls import url, include

from rest_framework.routers import DefaultRouter

from . import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'tags', views.TagViewSet)
router.register(r'contacts', views.ContactViewSet)
router.register(r'threads', views.ThreadViewSet)
router.register(r'messages', views.MessageViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
