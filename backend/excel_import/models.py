from django.db import models


class ImportedData(models.Model):
    column_a = models.CharField(max_length=100)
    column_b = models.CharField(max_length=100)

    objects = models.Manager()

