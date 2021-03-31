from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Position(models.Model):
    CHOICES = (
        ('LP', 'Lecturer'),
        ('SP', 'Student'),
    )
    position = models.CharField(max_length=50, choices=CHOICES, blank=True, null=True)

    def __str__(self):
        return self.position


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True)
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    position = models.ForeignKey(Position, on_delete=models.CASCADE) 

    def __str__(self):
        return self.first_name + " " + self.last_name


class File(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    extension = models.CharField(max_length=10, blank=True, null=True)
    description = models.CharField(max_length=50, blank=True, null=True)
    download_url = models.URLField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name + "." + self.extension


class Homework(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    description = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    files = models.ManyToManyField(File, through="HomeworkFile")

    def __str__(self):
        return self.name


class HomeworkFile(models.Model):
    homework = models.ForeignKey(Homework, on_delete=models.CASCADE, blank=True, null=True)
    file = models.ForeignKey(File, on_delete=models.CASCADE, blank=True, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)


class Room(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    background = models.ImageField(upload_to="uploads/class_background", null=True, blank=True)
    homeworks = models.ManyToManyField(Homework, blank=True)
    persons = models.ManyToManyField(Person, blank=True)

    def __str__(self):
        return self.name


class Comment(models.Model):
    text = models.CharField(max_length=200, null=True, blank=True)
    homework = models.ForeignKey(Homework, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.text

