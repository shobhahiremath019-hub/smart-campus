from django.db import models

class Resource(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    capacity = models.IntegerField()

    def __str__(self):
        return self.name


class Booking(models.Model):
    user = models.CharField(max_length=100)
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    approved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user} - {self.resource.name}"
# Create your models here.
