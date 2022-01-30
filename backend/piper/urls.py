from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('user/<int:user_id>', views.one_user, name='one_user'),
]
