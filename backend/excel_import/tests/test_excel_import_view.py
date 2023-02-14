import pandas as pd
import pytest
from excel_import.models import ImportedData


def test_excel_import_view_no_file_status_400(api_client):
    client = api_client()
    endpoint = '/import_excel/'

    response = client.post(path=endpoint)

    assert response.status_code == 400


@pytest.mark.django_db
def test_excel_import_view_with_csv_status_200(api_client):
    client = api_client()
    endpoint = '/import_excel/'

    with open("test_csv.csv", "r") as file:
        response = client.post(endpoint, {'file': file}, )
        assert response.status_code == 200
    df = pd.read_csv("test_csv.csv")

    imported_data = ImportedData.objects.all()

    assert len(df) == imported_data.count()


@pytest.mark.django_db
def test_excel_import_view_with_xlsx_status_200(api_client):
    client = api_client()
    endpoint = '/import_excel/'

    with open("test_excel.xlsx", "rb") as file:
        response = client.post(endpoint, {'file': file}, )
        assert response.status_code == 200
    df = pd.read_excel("test_excel.xlsx")

    imported_data = ImportedData.objects.all()

    assert len(df) == imported_data.count()

