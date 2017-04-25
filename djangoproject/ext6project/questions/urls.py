from django.conf.urls import url, include

from rest_framework.routers import DefaultRouter

from . import views

# Create a router and register our viewsets with it.
router = DefaultRouter()

router.register(r'questionnaires', views.QuestionnaireViewSet)
router.register(r'steps', views.StepViewSet)
router.register(r'questions', views.QuestionViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
