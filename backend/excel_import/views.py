from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from rest_framework.response import Response
import pandas as pd

from excel_import.serializers import ImportedDataSerializer


class ExcelImportView(APIView):
    
    def post(self, request):
        file = request.FILES.get("file")

        if not file:
            return Response(status=HTTP_400_BAD_REQUEST)
        else:
            if file.name.endswith(".xlsx"):
                df = pd.read_excel(file)
            elif file.name.endswith(".csv"):
                df = pd.read_csv(file)
            else:
                return Response(status=HTTP_400_BAD_REQUEST)

            if df is not None:
                for row in df.itertuples():
                    print(row)
                    seralizer = ImportedDataSerializer(
                        data={'column_a': row.column_a, 'column_b': row.column_b})
                    if seralizer.is_valid(raise_exception=False):
                        seralizer.save()
                return Response(status=HTTP_200_OK)
            else:
                return Response(status=HTTP_400_BAD_REQUEST)
