from django.contrib import admin
from excel_import.models import ImportedData


class ImportedDataAdmin(admin.ModelAdmin):
    pass


admin.site.register(ImportedData, ImportedDataAdmin)
