from rest_framework import serializers
from users.models import Gjhuyuit


class GjhuyuitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gjhuyuit
        fields = "__all__"
