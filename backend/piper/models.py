from django.db import models


class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=100)
    image_url = models.CharField(max_length=255)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'image_url': self.image_url
        }


class Locations(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'address': self.address
        }


class Saved(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    location_id = models.ForeignKey(Locations, on_delete=models.CASCADE)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'location_id': self.location_id
        }
