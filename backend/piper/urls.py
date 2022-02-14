from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('user/<int:user_id>', views.one_user, name='one_user'),
    path('google', views.get_api, name='get_api'),
    path('markers/new', views.marker, name="marker")
]
