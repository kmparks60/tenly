from django.db import models
from portal.models import CustomUser


class MaintenanceProfile(models.Model):
	user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
	property_name = models.CharField(max_length=100)

	def __str__(self):
		return f"Maintenance for {self.property_name}"

class Announcement(models.Model):
	title = models.CharField(max_length=255)
	body = models.TextField()
	created_by = models.ForeignKey(MaintenanceProfile, on_delete=models.CASCADE)
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title