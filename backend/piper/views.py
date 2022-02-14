from django.shortcuts import render
from django.http import HttpResponse
from piper.models import User, Locations, Saved
from decouple import config
import json


def index(request):
    users = User.objects.all()
    locations = Locations.objects.filter(name="Test")

    data = json.dumps({'user': [user.to_dict() for user in users],
                       'location': [loc.to_dict() for loc in locations]})

    return  HttpResponse(data, content_type='application/json')

def one_user(request, user_id):
    user = User.objects.get(id=user_id)

    if user:
        data = json.dumps({'user': user.to_dict()})
    else:
        data = json.dumps({'error': 'No such user!'})

    return HttpResponse(data, content_type='application/json')

def get_api(request):

    return HttpResponse(json.dumps({'key': config('GOOGLE_API_KEY')}), content_type='application/json')

def marker(request):
    if request.method == 'POST':
        return
