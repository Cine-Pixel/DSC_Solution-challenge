from django.contrib import admin
from .models import File, Homework, HomeworkFile, Room, Comment, Position, Person 


# Register your models here.
admin.site.register(File)
admin.site.register(Homework)
admin.site.register(HomeworkFile)
admin.site.register(Room)
admin.site.register(Comment)
admin.site.register(Position)
admin.site.register(Person)
