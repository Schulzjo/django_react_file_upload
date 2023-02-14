from excel_import.models import ImportedData
from rest_framework.serializers import ModelSerializer


class ImportedDataSerializer(ModelSerializer):
    class Meta:
        model = ImportedData
        fields = '__all__'
