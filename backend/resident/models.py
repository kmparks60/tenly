from django.db import models
from portal.models import CustomUser


class ResidentProfile(models.Model):
	user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
	unit_number = models.CharField(max_length=10)
	lease_start = models.DateField()
	lease_end = models.DateField()

	def __str__(self):
		f"{self.user.username} - Unit {self.unit_number}"

class MaintenanceRequest(models.Model):
	STATUS_CHOICES = [
		('new', 'New'),
		('in progress', 'In Progress'),
		('resolved', 'Resolved'),
	]
	resident = models.ForeignKey(ResidentProfile, on_delete=models.CASCADE)
	title = models.CharField(max_length=255)
	description = models.TextField()
	photo = models.ImageField(upload_to='maintenance_photos/', null=True, blank=True)
	urgency = models.CharField(max_length=10, choices=(('low', 'Low'), ('medium', 'Medium'), ('high', 'High')))
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title