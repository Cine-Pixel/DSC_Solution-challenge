from django.urls import path
from .views import RoomView, HomeworkView


urlpatterns = [
    path("rooms/", RoomView.as_view()),
    path("homeworks/", HomeworkView.as_view()),
]
