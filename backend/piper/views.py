from django.shortcuts import render
from django.http import HttpResponse
from piper.models import User, Locations, Saved
import json


def index(request):
    users = User.objects.all()
    locations = Locations.objects.filter(name="Test")

    data = json.dumps({'user': [user.to_dict() for user in users],
                       'location': [loc.to_dict() for loc in locations]})

    return  HttpResponse(data, content_type='application/json')
