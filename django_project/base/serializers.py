from rest_framework import serializers
from .models import Room, Homework

class RoomSerializer(serializers.ModelSerializer):
    homeworks = serializers.StringRelatedField(many=True)
    persons = serializers.StringRelatedField(many=True)


    class Meta:
        model = Room
        fields = '__all__'


class HomeworkSerializer(serializers.ModelSerializer):
    files = serializers.StringRelatedField(many=True)

    class Meta:
        model = Homework
        fields = '__all__'