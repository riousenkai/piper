from django.shortcuts import render
from django.http import HttpResponse
import json


def index(request):
    dic = {'test': 'json'}
    return HttpResponse(json.dumps(dic))
