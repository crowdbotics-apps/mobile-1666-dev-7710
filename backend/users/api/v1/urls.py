from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import GjhuyuitViewSet

router = DefaultRouter()
router.register("gjhuyuit", GjhuyuitViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
