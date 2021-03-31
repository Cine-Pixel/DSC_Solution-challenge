from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer, HomeworkSerializer
from .models import Room, Homework


# Create your views here.
class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class HomeworkView(generics.ListAPIView):
    queryset = Homework.objects.all()
    serializer_class = HomeworkSerializer
