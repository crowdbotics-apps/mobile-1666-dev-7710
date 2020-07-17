from rest_framework import authentication
from users.models import Gjhuyuit
from .serializers import GjhuyuitSerializer
from rest_framework import viewsets


class GjhuyuitViewSet(viewsets.ModelViewSet):
    serializer_class = GjhuyuitSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Gjhuyuit.objects.all()
