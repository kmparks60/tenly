from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
	ROLE_CHOICES =(
		('resident', 'Resident'),
		('maintenance', 'Maintenance'),
		('manager', 'Manager'),
	)
	role = models.CharField(max_length=20, choices=ROLE_CHOICES)

	def __str__(self):
		return f"{self.username} ({self.role})"

class ManagerProfile(models.Model):
	user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
	building_name = models.CharField(max_length=100)

	def __str__(self):
		return f"Manager: {self.user.username} ({self.building_name})"


class Announcement(models.Model):
	title = models.CharField(max_length=255)
	body = models.TextField()
	created_by = models.ForeignKey(ManagerProfile, on_delete=models.CASCADE)
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title


class ChatThread(models.Model):
	name = models.CharField(max_length=255, blank=True)
	participants = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='chat_threads')
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.name or f"Chat {self.id}"
	
class Message(models.Model):
	thread = models.ForeignKey(ChatThread, on_delete=models.CASCADE, related_name='messages')
	sender = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
	text = models.TextField()
	timestamp = models.DateTimeField(auto_now_add=True)
	is_read = models.BooleanField(default=False)

	def __str__(self):
		return f"{self.sender.username}: {self.text[:30]}"
	
class ChatAttachment(models.Model):
	message = models.ForeignKey('Message', on_delete=models.CASCADE, related_name='attachments')
	file = models.FileField(upload_to='chat_attachments/')
	uploaded_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f"Attachment for Message {self.message.id}"